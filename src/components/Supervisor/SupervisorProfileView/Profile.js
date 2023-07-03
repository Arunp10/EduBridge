import React from "react";
import { useState } from "react";
import Alert from "@mui/material/Alert";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  makeStyles,
  createStyles,
} from "@material-ui/core";
import DatePicker from "react-datepicker";

const Profile = (props) => {
  const [connectOpen, setConnectOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [Error, setError] = useState("");
  const [requestSent, setRequestSent] = useState(false);
  const [Connection, setConnection] = useState({
    supervisor: "",
    interest: "",
    comment: "",
  });

  const onchangehandle = (e) => {
    setConnection({ ...Connection, [e.target.name]: e.target.value });
  };

  const handleConnectOpen = () => {
    setConnectOpen(true);
  };

  const handleConnect = async () => {
    try {
      Connection.supervisor = props.id;
      if (Connection.interest === "" || Connection.comment === "") {
        setError("Please fill in all the required fields");
        return;
      }
       // API Call 
       const response = await fetch(`http://localhost:8080/api/connection/AddConnection`, {
         method: 'POST',
         headers: {
           'Content-Type': 'application/json',
           "auth-token": localStorage.getItem('token')
         },
         //Sending Json in form of Data in Body
         body: JSON.stringify(Connection)
       });
   
       const data = await response.json();

      // Request sent successfully
      // setError('');
      setRequestSent(true);
      
   } catch (error) {
      setError(error.message);
   }
    setIsOpen(false);
  };
  const handleCancel = () => {
    // Handle the cancel action here
    console.log("Cancel");
    setIsOpen(false);
  };

  // for Book an appointment usestates
  const [open, setOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedDay, setSelectedDay] = useState("");
  const [selectedTimeSlot, setSelectedTimeSlot] = useState("");
  const [purpose, setPurpose] = useState("");
  const [isTeacherAvailable, setIsTeacherAvailable] = useState(true);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setSelectedDate("");
    setSelectedDay("");
    setSelectedTimeSlot("");
    setPurpose("");
    setOpen(false);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    const day = date.toLocaleDateString("en-US", { weekday: "long" });
    setSelectedDay(day);
    if (day === "Saturday" || day === "Sunday") {
      setIsTeacherAvailable(false);
    } else {
      setIsTeacherAvailable(true);
    }
  };

  const handleTimeSlotChange = (event) => {
    setSelectedTimeSlot(event.target.value);
  };

  const handlePurposeChange = (event) => {
    setPurpose(event.target.value);
  };

  const handleSubmit = () => {
    // Handle the form submission
    if (selectedDate && selectedTimeSlot && purpose) {
      const appointmentDetails = {
        date: selectedDate,
        day: selectedDay,
        timeSlot: selectedTimeSlot,
        purpose: purpose,
      };
      console.log(appointmentDetails);
      handleClose();
    }
  };

  const generateTimeSlots = () => {
    const timeSlotsByDay = {
      Monday: [
        { startTime: "10:00 AM", endTime: "11:00 AM" },
        { startTime: "11:30 AM", endTime: "12:30 PM" },
        { startTime: "01:00 PM", endTime: "02:00 PM" },
        { startTime: "02:30 PM", endTime: "03:30 PM" },
        { startTime: "04:00 PM", endTime: "04:30 PM" },
      ],
      Tuesday: [
        { startTime: "01:00 PM", endTime: "02:00 PM" },
        { startTime: "02:30 PM", endTime: "03:30 PM" },
        { startTime: "03:45 PM", endTime: "04:00 PM" },
      ],
      Wednesday: [
        { startTime: "09:00 AM", endTime: "10:00 AM" },
        { startTime: "10:30 AM", endTime: "11:30 AM" },
        { startTime: "12:00 PM", endTime: "01:00 PM" },
      ],
      Thursday: [
        { startTime: "11:00 AM", endTime: "12:00 PM" },
        { startTime: "12:30 PM", endTime: "01:30 PM" },
        { startTime: "02:00 PM", endTime: "03:00 PM" },
      ],
      Friday: [
        { startTime: "10:00 AM", endTime: "11:00 AM" },
        { startTime: "11:30 AM", endTime: "12:30 PM" },
        { startTime: "01:00 PM", endTime: "02:00 PM" },
        { startTime: "02:30 PM", endTime: "03:30 PM" },
      ],
    };

    return (
      timeSlotsByDay[selectedDay]?.map((slot) => ({
        label: `${slot.startTime} - ${slot.endTime}`,
        value: `${slot.startTime} - ${slot.endTime}`,
      })) || []
    );
  };

  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="profile-details-name">
            <span className="primary-text">
              <span className="highlighted-text">
                {props.firstName} {""} {props.lastName}{" "}
              </span>
            </span>
          </div>
          <div className="profile-details-role">
            <span>
              <span className="profile-role-tagline">{props.occupation}</span>
            </span>
          </div>
          <div className="profile-options">
            <button className="primary-btn" onClick={handleOpen}>
              Book Appointment
            </button>
            <button className="highlighted-btn" onClick={() => setIsOpen(true)}>
              Connect
            </button>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
      {/* Book an appointment popup dialog box */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Book an Appointment</DialogTitle>
        <DialogContent>
          <DatePicker
            selected={selectedDate}
            onChange={handleDateChange}
            dateFormat="MM/dd/yyyy"
            minDate={new Date()}
            required
            showYearDropdown
            scrollableYearDropdown
            yearDropdownItemNumber={10}
            customInput={<TextField variant="outlined" fullWidth />}
          />
          <TextField
            label="Day"
            variant="outlined"
            fullWidth
            value={selectedDay}
            style={{ marginTop: "16px" }}
          />
          {!isTeacherAvailable ? (
            <p style={{ color: "red" }}>
              Srry! Not available on {selectedDay}.
            </p>
          ) : (
            <>
              <FormControl
                variant="outlined"
                fullWidth
                required
                style={{ marginTop: "16px" }}
              >
                <InputLabel>Time Slot</InputLabel>
                <Select
                  value={selectedTimeSlot}
                  onChange={handleTimeSlotChange}
                  label="Time Slot"
                >
                  {generateTimeSlots().map((slot) => (
                    <MenuItem key={slot.value} value={slot.value}>
                      {slot.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <TextField
                label="Purpose"
                variant="outlined"
                fullWidth
                value={purpose}
                onChange={handlePurposeChange}
                required
                style={{ marginTop: "16px" }}
              />
            </>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button
            onClick={handleSubmit}
            variant="contained"
            color="primary"
            disabled={
              !selectedDate ||
              !purpose ||
              !selectedTimeSlot ||
              !isTeacherAvailable
            }
          >
            Book
          </Button>
        </DialogActions>
      </Dialog>

      {/* Dialong Box for Connection request */}
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle>Send Connection</DialogTitle>
        <DialogContent>
          <TextField
            name="interest"
            id="interest"
            onChange={onchangehandle}
            label="Interest"
            fullWidth
            multiline
            placeholder="Enter a your Interest"
          />
          <TextField
            name="comment"
            id="comment"
            onChange={onchangehandle}
            label="Message"
            fullWidth
            multiline
            placeholder="Enter a message"
          />
          <br></br>
          {Error && <Alert severity="warning">Alert : {Error}</Alert>}
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleConnect}
            color="primary"
            disabled={requestSent}
          >
            Connect
          </Button>
          <Button onClick={handleCancel} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Profile;
