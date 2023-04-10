import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import StudentImg from "../Assets/student_1.jpg";
import Grid from "@material-ui/core/Grid";
import { Box, Button } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    width: "100%",
    margin: "auto",
    direction: "coloum",
    alignItems: "center",
    justify: "center",
  },
});
const data = [
  {
    name: "Aroon Kumar",
    imgSrc: StudentImg,
    Domain: "Web & IOT",
    message:
      "As-Salaam-Alaikum miss, I wanted to reach out to discuss an idea that I have for a potential project. Would it be possible to schedule a meeting or call to discuss this idea further? I would love to have the opportunity to bounce some ideas off of you and to hear your thoughts and suggestions.",
  },
];
const StudentConnectionCard = ({
  name,
  Domain,
  imgSrc,
  message,
  onAccept,
  onDecline,
}) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
        <Grid container spacing={3} alignItems="center">
          <Grid item>
            <Avatar
              alt="Aroon"
              src={imgSrc}
              style={{ height: "120px", width: "120px" }}
            />
          </Grid>
          <Grid item spacing={2}>
            <Typography variant="h6">{name}</Typography>
            <Typography variant="h7">Interest :{Domain}</Typography>
            <Grid item>
              <Typography variant="body2" align="justify" color="textSecondary">
                {message}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid container justify="flex-end">
          <Grid item>
            <Button variant="outlined" color="primary" onClick={onAccept}>
              Accept
            </Button>
          </Grid>
          <Grid item>
            <Button variant="outlined" color="secondary" onClick={onDecline}>
              Decline
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
const StudentCard = () => (
  <>
    <div className="container mt-4">
      <div className="row">
        <div className="col-9">
          {data.map((item, index) => (
            <StudentConnectionCard key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  </>
);
export default StudentCard;
