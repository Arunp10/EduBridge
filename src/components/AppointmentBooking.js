import React, { useState } from "react";
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

const AppointmentBooking = ({onSubmit }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(true);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [description, setDescription] = useState("");
  const [dateError, setDateError] = useState(false);
  const [timeError, setTimeError] = useState(false);

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

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
    }
    else {
      // setDate("");
      // setTime("");
      // setDescription("");
      console.log(`Book appointment for ${date} at ${time}`);
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
    <>
    {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Book Appointment
    </Button> */}
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
        <Button onClick={handleSubmit} type="submit" value="Submit">Book</Button>
      </DialogActions>
    </Dialog>
    </>
  );
};

export default AppointmentBooking;












// import React, { useState } from 'react';
// import {
//   Button,
//   Dialog,
//   DialogActions,
//   DialogContent,
//   DialogTitle,
//   TextField,
// } from '@material-ui/core';

// const AppointmentBooking = () => {
//   const [open, setOpen] = useState(true);
//   const [date, setDate] = useState('');
//   const [time, setTime] = useState('');
//   const [description, setDescription] = useState("");

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   const handleDateChange = (event) => {
//     setDate(event.target.value);
//   };

//   const handleTimeChange = (event) => {
//     setTime(event.target.value);
//   };

//   const handleDescriptionChange = (event) => {
//     setDescription(event.target.value);
//   };

//   const handleSubmit = () => {
//     // Handle appointment booking logic here
//     console.log(`Book appointment for ${date} at ${time}`);
//     handleClose();
//   };

//   return (
//     <div>
//       <Button variant="outlined" color="primary" onClick={handleClickOpen}>
//         Book Appointment
//       </Button>
//       <Dialog open={open} onClose={handleClose}>
//         <DialogTitle>Book an Appointment</DialogTitle>
//         <DialogContent>
//           <TextField
//             autoFocus
//             margin="dense"
//             label="Date"
//             type="date"
//             value={date}
//             onChange={handleDateChange}
//             fullWidth
//           />
//           <TextField
//             margin="dense"
//             label="Time"
//             type="time"
//             value={time}
//             onChange={handleTimeChange}
//             fullWidth
//           />
//            <TextField
//             margin="dense"
//             label="Description"
//             value={description}
//             onChange={handleDescriptionChange}
//             fullWidth
//           />
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleClose} color="primary">
//             Cancel
//           </Button>
//           <Button onClick={handleSubmit} color="primary">
//             Book
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </div>
//   );
// };

// export default AppointmentBooking;



// import React, { useState } from "react";
// import {
//   Button,
//   Dialog,
//   DialogActions,
//   DialogContent,
//   DialogTitle,
//   TextField,
// } from "@material-ui/core";

// const AppointmentBooking = ({ isOpen, onClose, onSubmit }) => {
//   const [date, setDate] = useState("");
//   const [time, setTime] = useState("");
//   const [description, setDescription] = useState("");

//   const handleDateChange = (event) => {
//     setDate(event.target.value);
//   };

//   const handleTimeChange = (event) => {
//     setTime(event.target.value);
//   };

//   const handleDescriptionChange = (event) => {
//     setDescription(event.target.value);
//   };

//   const handleSubmit = () => {
//     onSubmit(date, time, description);
//     setDate("");
//     setTime("");
//     setDescription("");
//   };

//   return (
//     <Dialog open={isOpen} onClose={onClose}>
//       <DialogTitle>Book Appointment</DialogTitle>
//       <DialogContent>
//         <TextField
//           autoFocus
//           margin="dense"
//           label="Date"
//           type="date"
//           value={date}
//           onChange={handleDateChange}
//           fullWidth
//         />
//         <TextField
//           margin="dense"
//           label="Time"
//           type="time"
//           value={time}
//           onChange={handleTimeChange}
//           fullWidth
//         />
//         <TextField
//           margin="dense"
//           label="Description"
//           value={description}
//           onChange={handleDescriptionChange}
//           fullWidth
//         />
//       </DialogContent>
//       <DialogActions>
//         <Button onClick={onClose}>Cancel</Button>
//         <Button onClick={handleSubmit}>Book</Button>
//       </DialogActions>
//     </Dialog>
//   );
// };

// export default AppointmentBooking;
