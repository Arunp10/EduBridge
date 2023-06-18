import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
  Avatar,
  Grid,
  makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
    backgroundColor: theme.palette.background.paper,
    borderRadius: theme.spacing(5),
    boxShadow: theme.shadows[4],
    transition: 'transform 0.3s',
    '&:hover': {
      transform: 'scale(1.02)',
    },
  },
  cardContent: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
  },
  cancelBtn: {
    margin: theme.spacing(2),
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
    },
  },
  studentName: {
    fontWeight: 'bold',
    marginBottom: theme.spacing(1),
  },
  interestedDomain: {
    fontStyle: 'italic',
    color: theme.palette.text.secondary,
    marginBottom: theme.spacing(1),
  },
 status: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
    marginLeft: 'auto',
  },
}));

const appointmentsData = [
  {
    id: 1,
    studentName: 'John Doe',
    interestedDomain: 'Computer Science',
    bookedTime: '10:00 AM',
    bookedDate: '2023-06-20',
    appointmentStatus: 'Pending',
    studentPicture: 'https://example.com/john_doe.jpg',
  },
  {
    id: 2,
    studentName: 'John Doe',
    interestedDomain: 'Computer Science',
    bookedTime: '10:00 AM',
    bookedDate: '2023-06-20',
    appointmentStatus: 'Pending',
    studentPicture: 'https://example.com/john_doe.jpg',
  },
  {
    id: 3,
    studentName: 'John Doe',
    interestedDomain: 'Computer Science',
    bookedTime: '10:00 AM',
    bookedDate: '2023-06-20',
    appointmentStatus: 'Pending',
    studentPicture: 'https://example.com/john_doe.jpg',
  },
  {
    id: 4,
    studentName: 'John Doe',
    interestedDomain: 'Computer Science',
    bookedTime: '10:00 AM',
    bookedDate: '2023-06-20',
    appointmentStatus: 'Pending',
    studentPicture: 'https://example.com/john_doe.jpg',
  },
  {
    id: 5,
    studentName: 'John Doe',
    interestedDomain: 'Computer Science',
    bookedTime: '10:00 AM',
    bookedDate: '2023-06-20',
    appointmentStatus: 'Pending',
    studentPicture: 'https://example.com/john_doe.jpg',
  },
  // Add more appointments as needed...
];

const Appointment = () => {
  const classes = useStyles();
  const [appointments, setAppointments] = useState(appointmentsData);

  const handleCancelAppointment = (appointmentId) => {
    const updatedAppointments = appointments.filter(
      (appointment) => appointment.id !== appointmentId
    );
    setAppointments(updatedAppointments);
  };

  return (
    <Grid container spacing={2}>
      {appointments.map((appointment) => (
        <Grid item xs={12} sm={6} md={4} key={appointment.id}>
          <Card className={classes.card}>
            <CardContent className={classes.cardContent}>
              <Grid container spacing={2} alignItems="center">
                <Grid item>
                  <Avatar
                    src={appointment.studentPicture}
                    alt="Student"
                    className={classes.avatar}
                  />
                </Grid>
                <Grid item>
                  <Typography variant="h6" className={classes.studentName}>
                    {appointment.studentName}
                  </Typography>
                  <Typography variant="body2" className={classes.interestedDomain}>
                    {appointment.interestedDomain}
                  </Typography>
                  <Typography variant="body2">
                    {appointment.bookedTime}, {appointment.bookedDate}
                  </Typography>
                  <Typography variant="body2" className={classes.status}>
                    Status: {appointment.appointmentStatus}
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
            <CardActions>
              <Button
                variant="contained"
                color="secondary"
                className={classes.cancelBtn}
                onClick={() => handleCancelAppointment(appointment.id)}
              >
                Cancel
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Appointment;
