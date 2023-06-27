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
import DeleteIcon from '@material-ui/icons/Delete';

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
      transform: 'scale(1.04)',
    },
  },
  cardContent: {
    flexGrow: 1,
    padding: theme.spacing(1),
  },
  avatarContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    marginRight: theme.spacing(2),
  },
  cancelBtn: {
    margin: theme.spacing(2),
    backgroundColor: theme.palette.common.white,
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
    },
  },
  studentName: {
    fontWeight: 'bold',
  },
  interestedDomain: {
    fontStyle: 'italic',
    color: theme.palette.text.secondary,
    marginBottom: theme.spacing(2),
  },
 status: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  deleteIcon: {
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.common.white,
  },
  acceptBtn: {
    margin: theme.spacing(2),
    backgroundColor: theme.palette.success.main,
    '&:hover': {
      backgroundColor: theme.palette.success.dark,
    },
  },
  rejectBtn: {
    margin: theme.spacing(2),
    backgroundColor: theme.palette.error.main,
    '&:hover': {
      backgroundColor: theme.palette.error.dark,
    },
  },
 
  heading: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
    marginBottom: theme.spacing(1),
    marginTop: theme.spacing(2),
   
  },
  value: {
    marginLeft: theme.spacing(0),
    marginBottom: theme.spacing(1),
  },
}));

const appointmentsData = [
  {
    id: 1,
    studentName: 'John Doe',
    interestedDomain: 'Computer Science',
    bookedTime: '10:00 AM',
    bookedDate: '2023-06-20',
    day: "Monday",
    message: "i want to book an appointment to discuss about my fyp idea ",
    appointmentStatus: 'Pending',
    studentPicture: 'https://example.com/john_doe.jpg',
  },
  {
    id: 2,
    studentName: 'John Doe ',
    interestedDomain: 'Computer Science',
    bookedTime: '10:00 AM',
    bookedDate: '2023-06-20',
    day: "Tuesday",
    message: "i want to book an appointment to discuss about my fyp idea",
    appointmentStatus: 'Pending',
    studentPicture: 'https://example.com/john_doe.jpg',
  },
  {
    id: 3,
    studentName: 'John Doe',
    interestedDomain: 'Computer Science',
    bookedTime: '10:00 AM',
    bookedDate: '2023-06-20',
    day: "Wednesday",
    message: "i want to book an appointment to discuss about my fyp idea",
    appointmentStatus: 'Pending',
    studentPicture: 'https://example.com/john_doe.jpg',
  },
  {
    id: 4,
    studentName: 'John Doe',
    interestedDomain: 'Computer Science',
    bookedTime: '10:00 AM',
    bookedDate: '2023-06-20',
    day: "Friday",
    message: "i want to book an appointment to discuss about my fyp idea",
    appointmentStatus: 'Pending',
    studentPicture: 'https://example.com/john_doe.jpg',
  },
  {
    id: 5,
    studentName: 'John Doe',
    interestedDomain: 'Computer Science',
    bookedTime: '10:00 AM',
    bookedDate: '2023-06-20',
    day: "Monday",
    message: "i want to book an appointment to discuss about my fyp idea",
    appointmentStatus: 'Pending',
    studentPicture: 'https://example.com/john_doe.jpg',
  },
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
        <Grid item xs={12} sm={12} md={12} key={appointment.id}>
          <Card className={classes.card}>
            <CardContent className={classes.cardContent}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={4} md={3}>
                  <Grid container alignItems="center">
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
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} sm={8} md={9}>
                  <Grid container spacing={0}>
                    <Grid item xs={6} sm={4}>
                      <Typography variant="body2" className={classes.heading}>
                        Day:
                      </Typography>
                      <Typography variant="body2" className={classes.value}>
                        {appointment.day}
                      </Typography>
                    </Grid>
                    <Grid item xs={6} sm={4}>
                      <Typography variant="body2" className={classes.heading}>
                        Time:
                      </Typography>
                      <Typography variant="body2" className={classes.value}>
                        {appointment.bookedTime}
                      </Typography>
                    </Grid>
                    <Grid item xs={6} sm={4}>
                      <Typography variant="body2" className={classes.heading}>
                        Date:
                      </Typography>
                      <Typography variant="body2" className={classes.value}>
                        {appointment.bookedDate}
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={8}>
                      <Typography variant="body2" className={classes.heading}>
                        Purpose:
                      </Typography>
                      <Typography variant="body2" className={classes.value}>
                        {appointment.message}
                      </Typography>
                    </Grid>
                    <Grid item xs={6} sm={4}>
                      <Typography variant="body2" className={classes.heading}>
                        Status:
                      </Typography>
                      <Typography variant="body2" className={classes.value}>
                        {appointment.appointmentStatus}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </CardContent>
            <CardActions>
              <Button
                variant="contained"
                className={classes.cancelBtn}
                onClick={() => handleCancelAppointment(appointment.id)}
              >
                <DeleteIcon className={classes.deleteIcon} />
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Appointment;

