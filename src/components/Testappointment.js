import React, { useState } from 'react';
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
} from '@mui/material';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const AppointmentPopup = () => {
  const [open, setOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedDay, setSelectedDay] = useState('');
  const [selectedTimeSlot, setSelectedTimeSlot] = useState('');
  const [purpose, setPurpose] = useState('');
  const [isTeacherAvailable, setIsTeacherAvailable] = useState(true);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setSelectedDate('');
    setSelectedDay("");
    setSelectedTimeSlot("");
    setPurpose("");
    setOpen(false);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    const day = date.toLocaleDateString('en-US', { weekday: 'long' });
    setSelectedDay(day);
    if (day === 'Saturday' || day === 'Sunday') {
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
      setSelectedDate('');
      setSelectedDay("");
      setSelectedTimeSlot("");
      setPurpose("");
      handleClose();
    }
  };

  const generateTimeSlots = () => {
    const timeSlotsByDay = {
      Monday: [
        { startTime: '10:00 AM', endTime: '11:00 AM' },
        { startTime: '11:30 AM', endTime: '12:30 PM' },
        { startTime: '01:00 PM', endTime: '02:00 PM' },
        { startTime: '02:30 PM', endTime: '03:30 PM' },
        { startTime: '04:00 PM', endTime: '04:30 PM' },
      ],
      Tuesday: [
        { startTime: '01:00 PM', endTime: '02:00 PM' },
        { startTime: '02:30 PM', endTime: '03:30 PM' },
        { startTime: '03:45 PM', endTime: '04:00 PM' },
      ],
      Wednesday: [
        { startTime: '09:00 AM', endTime: '10:00 AM' },
        { startTime: '10:30 AM', endTime: '11:30 AM' },
        { startTime: '12:00 PM', endTime: '01:00 PM' },
      ],
      Thursday: [
        { startTime: '11:00 AM', endTime: '12:00 PM' },
        { startTime: '12:30 PM', endTime: '01:30 PM' },
        { startTime: '02:00 PM', endTime: '03:00 PM' },
      ],
      Friday: [
        { startTime: '10:00 AM', endTime: '11:00 AM' },
        { startTime: '11:30 AM', endTime: '12:30 PM' },
        { startTime: '01:00 PM', endTime: '02:00 PM' },
        { startTime: '02:30 PM', endTime: '03:30 PM' },
      ],
    };

    return timeSlotsByDay[selectedDay]?.map((slot) => ({
      label: `${slot.startTime} - ${slot.endTime}`,
      value: `${slot.startTime} - ${slot.endTime}`,
    })) || [];
  };

  return (
    <>
      <Button variant="contained" onClick={handleOpen}>
        Book Appointment
      </Button>
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
          {selectedDate ? (
            <>
              <TextField
                label="Day"
                variant="outlined"
                fullWidth
                value={selectedDay}
                disabled
                style={{ marginTop: '16px' }}
              />
              {!isTeacherAvailable ? (
                <p style={{ color: 'red' }}>Teacher is not available on {selectedDay}.</p>
              ) : (
                <>
                  <FormControl variant="outlined" fullWidth required style={{ marginTop: '16px' }}>
                    <InputLabel>Time Slot</InputLabel>
                    <Select value={selectedTimeSlot} onChange={handleTimeSlotChange} label="Time Slot">
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
                    style={{ marginTop: '16px' }}
                  />
                </>
              )}
            </>
          ) : (
            <p>Please select a date.</p>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button
            onClick={handleSubmit}
            variant="contained"
            color="primary"
            disabled={!selectedDate || !purpose || !selectedTimeSlot || !isTeacherAvailable}
          >
            Book
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default AppointmentPopup;
