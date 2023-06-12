import React, { useState } from "react";
import { Grid, Button, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { FormControlLabel, Checkbox } from "@material-ui/core";

import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 1100,
    marginTop: 30,
    marginLeft: 30,
    marginBottom: 50,
  },
  button: {
    margin: theme.spacing(1),
    marginTop: 30,
  },
}));

const ShowAvailability = () => {
  const classes = useStyles();
  const [selectedTimeslots, setSelectedTimeslots] = useState([]);
  const [day, setDay] = useState("Monday");
  const [isNotAvailable, setIsNotAvailable] = useState(false);

  const handleTimeslotClick = (time) => {
    if (!isNotAvailable) {
      const timeslot = { day, time };
      const isSelected = selectedTimeslots.some(
        (selectedTimeslot) =>
          selectedTimeslot.day === timeslot.day &&
          selectedTimeslot.time === timeslot.time
      );

      if (isSelected) {
        setSelectedTimeslots((prevState) =>
          prevState.filter(
            (selectedTimeslot) =>
              selectedTimeslot.day !== timeslot.day ||
              selectedTimeslot.time !== timeslot.time
          )
        );
      } else {
        setSelectedTimeslots((prevState) => [...prevState, timeslot]);
      }
    }
  };

  const handleNotAvailableClick = () => {
    setIsNotAvailable(true);
    setSelectedTimeslots([]);
    console.log(`Not available on ${day}`);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(selectedTimeslots);
    alert("Thankyou for showing Availability")
  };

  const handleDayChange = (event) => {
    setDay(event.target.value);
  };

  const timeslots = {
    Monday: [
      "08:30AM - 09:00AM",
      "09:00AM - 09:30AM",
      "09:30AM - 10:00AM",
      "10:00AM - 10:30AM",
      "10:30AM - 11:00AM",
      "11:00AM - 11:30AM",
      "11:30AM - 12:00PM",
      "12:00PM - 12:30PM",
      "12:30PM - 01:00PM",
      "01:00PM - 01:30PM",
      "01:30PM - 02:00PM",
      "02:00PM - 02:30PM",
      "02:30PM - 03:00PM",
      "03:00PM - 03:30PM",
      "03:30PM - 04:00PM",
      "04:00PM - 04:30PM",
    ],
    Tuesday: [
      "08:30AM - 09:00AM",
      "09:00AM - 09:30AM",
      "09:30AM - 10:00AM",
      "10:00AM - 10:30AM",
      "10:30AM - 11:00AM",
      "11:00AM - 11:30AM",
      "11:30AM - 12:00PM",
      "12:00PM - 12:30PM",
      "12:30PM - 01:00PM",
      "01:00PM - 01:30PM",
      "01:30PM - 02:00PM",
      "02:00PM - 02:30PM",
      "02:30PM - 03:00PM",
      "03:00PM - 03:30PM",
      "03:30PM - 04:00PM",
      "04:00PM - 04:30PM",
    ],
    Wednesday: [
      "08:30AM - 09:00AM",
      "09:00AM - 09:30AM",
      "09:30AM - 10:00AM",
      "10:00AM - 10:30AM",
      "10:30AM - 11:00AM",
      "11:00AM - 11:30AM",
      "11:30AM - 12:00PM",
      "12:00PM - 12:30PM",
      "12:30PM - 01:00PM",
      "01:00PM - 01:30PM",
      "01:30PM - 02:00PM",
      "02:00PM - 02:30PM",
      "02:30PM - 03:00PM",
      "03:00PM - 03:30PM",
      "03:30PM - 04:00PM",
      "04:00PM - 04:30PM",
    ],
    Thursday: [
      "08:30AM - 09:00AM",
      "09:00AM - 09:30AM",
      "09:30AM - 10:00AM",
      "10:00AM - 10:30AM",
      "10:30AM - 11:00AM",
      "11:00AM - 11:30AM",
      "11:30AM - 12:00PM",
      "12:00PM - 12:30PM",
      "12:30PM - 01:00PM",
      "01:00PM - 01:30PM",
      "01:30PM - 02:00PM",
      "02:00PM - 02:30PM",
      "02:30PM - 03:00PM",
      "03:00PM - 03:30PM",
      "03:30PM - 04:00PM",
      "04:00PM - 04:30PM",
    ],
    Friday: [
      "08:30AM - 09:00AM",
      "09:00AM - 09:30AM",
      "09:30AM - 10:00AM",
      "10:00AM - 10:30AM",
      "10:30AM - 11:00AM",
      "11:00AM - 11:30AM",
      "11:30AM - 12:00PM",
      "12:00PM - 12:30PM",
      "12:30PM - 01:00PM",
      "01:00PM - 01:30PM",
      "01:30PM - 02:00PM",
      "02:00PM - 02:30PM",
      "02:30PM - 03:00PM",
      "03:00PM - 03:30PM",
      "03:30PM - 04:00PM",
      "04:00PM - 04:30PM",
    ],
  };
  return (
    <form onSubmit={handleSubmit}>
      <Typography
        align="center"
        variant="h6"
        gutterBottom
        style={{ marginTop: 30, fontWeight: "bold" }}
      >
        Select Your Availability
      </Typography>
      <FormControlLabel
        control={
          <Checkbox
            checked={isNotAvailable}
            onClick={handleNotAvailableClick}
            onChange={(e) => setIsNotAvailable(e.target.checked)}
            color="primary"
          />
        }
        label="Not Available"
        style={{ marginLeft: "898px" }}
      />
      <FormControl className={classes.formControl}>
        <InputLabel id="date-label">Day</InputLabel>
        <Select
          labelId="day-label"
          id="day-select"
          value={day}
          onChange={handleDayChange}
          onClick={() => {
            setIsNotAvailable(false);
          }}
        >
          <MenuItem value={"Monday"}>Monday</MenuItem>
          <MenuItem value={"Tuesday"}>Tuesday</MenuItem>
          <MenuItem value={"Wednesday"}>Wednesday</MenuItem>
          <MenuItem value={"Thursday"}>Thursday</MenuItem>
          <MenuItem value={"Friday"}>Friday</MenuItem>
        </Select>
      </FormControl>
      <Grid>
        <Box mb={2}>
          {timeslots[day].map((timeslot) => (
            <Button
              key={timeslot}
              variant={
                selectedTimeslots.some(
                  (selectedTimeslot) =>
                    selectedTimeslot.day === day &&
                    selectedTimeslot.time === timeslot
                )
                  ? "contained"
                  : "outlined"
              }
              color={
                selectedTimeslots.some(
                  (selectedTimeslot) =>
                    selectedTimeslot.day === day &&
                    selectedTimeslot.time === timeslot
                )
                  ? "primary"
                  : "default"
              }
              onClick={() => handleTimeslotClick(timeslot)}
              disabled={isNotAvailable}
              style={{
                marginTop: "10px",
                marginBottom: "15px",
                marginRight: "10px",
                marginLeft: "85px",
              }}
            >
              {timeslot}
            </Button>
          ))}
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Button
          style={{
            maxWidth: "500px",
            maxHeight: "50px",
            minWidth: "200px",
            minHeight: "30px",
            marginLeft: "450px",
            marginTop: "100px",
          }}
          className={classes.button}
          type="submit"
          variant="contained"
          color="primary"
        >
          Show Availability
        </Button>
      </Grid>
    </form>
  );
};

export default ShowAvailability;
