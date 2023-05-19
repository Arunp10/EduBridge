import React from "react";
import { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  makeStyles,
  createStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      "& .MuiTextField-root": {
        margin: theme.spacing(1),
        width: "100%",
      },
    },
    error: {
      color: "red",
    },
  })
);

export default function Profile(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [description, setDescription] = useState("");
  const [dateError, setDateError] = useState(false);
  const [timeError, setTimeError] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
    setDateError(false);
  };

  const handleTimeChange = (event) => {
    setTime(event.target.value);
    setTimeError(false);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = () => {
    if (date === "") {
      setDateError(true);
    }
    if (time === "") {
      setTimeError(true);
    } else {
      console.log(`Appointment Booked for ${date} at ${time}`);
      setOpen(false);
    }
  };

  const handleCancel = () => {
    setDate("");
    setTime("");
    setDescription("");
    setDateError(false);
    setTimeError(false);
    setOpen(false);
  };

  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="profile-details-name">
            <span className="primary-text">
              <span className="highlighted-text">{props.name}</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span>
              {" "}
              {/* <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Ethusiastic Dev 🔴",
                    3000,
                    "Full Stack Developer 💻",
                    3000,
                    "Mern Stack Developer 😎",
                    3000,
                  ]}
                />
              </h1> */}
              <span className="profile-role-tagline">Assistant Professor</span>
            </span>
          </div>
          <div className="profile-options">
            <button className="primary-btn" onClick={handleClickOpen}>Book an Appointment</button>
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
      <Dialog open={open} onClose={handleCancel}>
        <DialogTitle>Book Appointment</DialogTitle>
        <DialogContent className={classes.root}>
          <TextField
            autoFocus
            margin="dense"
            label=""
            type="date"
            value={date}
            onChange={handleDateChange}
            error={dateError}
            helperText={dateError && "Please select a date."}
            fullWidth
          />
          <TextField
            margin="dense"
            label=""
            type="time"
            value={time}
            onChange={handleTimeChange}
            error={timeError}
            helperText={timeError && "Please select a time."}
            fullWidth
          />
          <TextField
            margin="dense"
            label="Description"
            value={description}
            onChange={handleDescriptionChange}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancel}>Cancel</Button>
          <Button onClick={handleSubmit} type="submit" value="Submit">
            Book
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
