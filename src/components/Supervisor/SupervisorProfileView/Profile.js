import React from "react";
import { useState } from "react";
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

const useStyles = makeStyles((theme) =>
  createStyles({
    error: {
      color: "red",
    },
  })
);

const Monday = [
  { value: "9:00 AM - 10:00 AM", label: "9:00 AM - 10:00 AM" },
  { value: "10:00 AM - 11:00 AM", label: "10:00 AM - 11:00 AM" },
  { value: "11:00 AM - 12:00 PM", label: "11:00 AM - 12:00 PM" },
];
const Tuesday = [
  { value: "9:00 AM - 10:00 AM", label: "9:00 AM - 10:00 AM" },
  { value: "10:00 AM - 11:00 AM", label: "10:00 AM - 11:00 AM" },
  { value: "11:00 AM - 12:00 PM", label: "11:00 AM - 12:00 PM" },
  { value: "1:00 PM - 2:00 PM", label: "1:00 PM - 2:00 PM" },
  { value: "2:00 PM - 3:00 PM", label: "2:00 PM - 3:00 PM" },
  { value: "3:00 PM - 4:00 PM", label: "3:00 PM - 4:00 PM" },
];
const Wednesday = [{ value: "Not Available", label: "Not Available" }];
const Thursday = [{ value: "Not Available", label: "Not Available" }];
const Friday = [
  { value: "9:00 AM - 10:00 AM", label: "9:00 AM - 10:00 AM" },
  { value: "10:00 AM - 11:00 AM", label: "10:00 AM - 11:00 AM" },
  { value: "11:00 AM - 12:00 PM", label: "11:00 AM - 12:00 PM" },
  { value: "1:00 PM - 2:00 PM", label: "1:00 PM - 2:00 PM" },
];

const daysOfWeek = [
  { value: "Monday", label: "Monday" },
  { value: "Tuesday", label: "Tuesday" },
  { value: "Wednesday", label: "Wednesday" },
  { value: "Thursday", label: "Thursday" },
  { value: "Friday", label: "Friday" },
];

const Profile = (props) => {
  const [selectedDay, setSelectedDay] = useState("");
  const [selectedTimeSlot, setSelectedTimeSlot] = useState("");
  const [message, setMessage] = useState("");
  const [isDisabled, setDisabled] = useState(false);
  const [dayError, setDayError] = useState('');
  const [timeError, setTimeError] = useState(false);
  const [availabilityOpen, setAvailabilityOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");


  const handleAvailabilityOpen = () => {
    setAvailabilityOpen(true);
  };

  const handleAvailabilityClose = () => {
    setSelectedDay("");
    setSelectedTimeSlot("");
    setMessage("");
    setDayError(false);
    setTimeError(false);
    setAvailabilityOpen(false);
  };

  const handleDaySelectChange = (event) => {
    setSelectedDay(event.target.value);
    setSelectedTimeSlot("");
    setDayError(false);
  };

  const handleTimeSlotSelectChange = (event) => {
    setSelectedTimeSlot(event.target.value);
    setTimeError(false);
    if (selectedTimeSlot === 'Not Available') {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  };

  const handleInputChange = (event) => {
    setMessage(event.target.value);
  };

  const handleAvailabilityConfirm = () => {
    if (selectedDay === "") {
      setDayError(true);
      setDisabled(true);
    }
    if (selectedTimeSlot === "" || selectedTimeSlot === "Not Available") {
      setTimeError(true);
      setDisabled(true);
    }
    else{
      console.log({
        day: selectedDay,
        timeslot: selectedTimeSlot,
        message: message,
      });
      setSelectedDay("");
      setSelectedTimeSlot("");
      setMessage("");
      setDisabled(false);
      setAvailabilityOpen(false);
    }
  };
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="profile-details-name">
            <span className="primary-text">
              <span className="highlighted-text">{props.firstName} {""} {props.lastName} </span>
            </span>
          </div>
          <div className="profile-details-role">
            <span>
              {" "}
              <span className="profile-role-tagline">{props.occupation}</span>
            </span>
          </div>
          <div className="profile-options">
            <button className="primary-btn" onClick={handleAvailabilityOpen}>
              Book Appointment
            </button>
            <a
              href="Laksh's Resume.pdf"
              download="EDUBRIDGE Laksh's Resume.pdf"
            >
              <button className="highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
      <Dialog
        open={availabilityOpen}
        onClose={handleAvailabilityClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Book Appointment</DialogTitle>
        <DialogContent>
          <FormControl fullWidth>
            <InputLabel id="day-select-label">Day</InputLabel>
            <Select
              labelId="day-select-label"
              id="day-select"
              label="Select day"
              value={selectedDay}
              onChange={handleDaySelectChange}
              error={dayError}
            >
              {daysOfWeek.map((day) => (
                <MenuItem key={day.value} value={day.value}>
                  {day.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          {selectedDay && (
            <FormControl fullWidth>
              <InputLabel id="time-slot-select-label">Time Slot</InputLabel>
              {selectedDay === "Monday" && (
                <Select
                  labelId="time-slot-select-label"
                  id="time-slot-select"
                  label="Select time"
                  value={selectedTimeSlot}
                  onChange={handleTimeSlotSelectChange}
                  error={timeError}
                >
                  {Monday.map((slot) => (
                    <MenuItem key={slot.value} value={slot.value}>
                      {slot.label}
                    </MenuItem>
                  ))}
                </Select>
              )}
              {selectedDay === "Tuesday" && (
                <Select
                  labelId="time-slot-select-label"
                  id="time-slot-select"
                  label="Select time"
                  value={selectedTimeSlot}
                  onChange={handleTimeSlotSelectChange}
                  error={timeError}
                >
                  {Tuesday.map((slot) => (
                    <MenuItem key={slot.value} value={slot.value}>
                      {slot.label}
                    </MenuItem>
                  ))}
                </Select>
              )}
              {selectedDay === "Wednesday" && (
                <Select
                  labelId="time-slot-select-label"
                  id="time-slot-select"
                  label="Select time"
                  value={selectedTimeSlot}
                  onChange={handleTimeSlotSelectChange}
                  error={timeError}
                >
                  {Wednesday.map((slot) => (
                    <MenuItem key={slot.value} value={slot.value}>
                      {slot.label}
                    </MenuItem>
                  ))}
                </Select>
              )}
              {selectedDay === "Thursday" && (
                <Select
                  labelId="time-slot-select-label"
                  id="time-slot-select"
                  label="Select time"
                  value={selectedTimeSlot}
                  onChange={handleTimeSlotSelectChange}
                  error={timeError}
                >
                  {Thursday.map((slot) => (
                    <MenuItem key={slot.value} value={slot.value}>
                      {slot.label}
                    </MenuItem>
                  ))}
                </Select>
              )}
              {selectedDay === "Friday" && (
                <Select
                  labelId="time-slot-select-label"
                  id="time-slot-select"
                  label="Select time"
                  value={selectedTimeSlot}
                  onChange={handleTimeSlotSelectChange}
                  error={timeError}
                >
                  {Friday.map((slot) => (
                    <MenuItem key={slot.value} value={slot.value}>
                      {slot.label}
                    </MenuItem>
                  ))}
                </Select>
              )}
            </FormControl>
          )}
          {selectedTimeSlot !== "Not Available" && (
            <TextField
              margin="dense"
              id="message"
              label="Message"
              fullWidth
              value={message}
              onChange={handleInputChange}
            />
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleAvailabilityClose} color="primary">
            Cancel
          </Button>
          <Button
            onClick={handleAvailabilityConfirm}
            color="primary"
            disabled={isDisabled}
          >
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Profile;
