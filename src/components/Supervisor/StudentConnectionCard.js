import React,{useState,useEffect} from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import StudentImg from "../Assets/student_1.jpg";
import Grid from "@material-ui/core/Grid";
import { Box, Button } from "@material-ui/core";
import { concatMap } from "rxjs";
import imgsrc from "../uploads/image.jpg";
const useStyles = makeStyles({
  root: {
    width: "100%",
    margin: "auto",
    direction: "coloum",
    alignItems: "center",
    justify: "center",
  },
});

const StudentConnectionCard = (props) => {
  const classes = useStyles();
 
  return (
    <Card className={classes.root}>
      <CardContent>
        <Grid container spacing={6} alignItems="center">
          <Grid item>
            <Avatar
              alt="Aroon"
              src={imgsrc}
              style={{ height: "120px", width: "120px" }}
            />
          </Grid>
          <Grid item spacing={2}>
            <Typography variant="h6">{props.FirstName}{' '}{props.LastName}</Typography>
            <Typography variant="h7">Interest : {props.interest}</Typography>
            <Grid item>
              <Typography variant="body2" align="justify" color="textSecondary">
                {props.comment}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid container justify="flex-end">
          <Grid item>
            <Button variant="outlined" color="primary" onClick={props.onAccept}>
              Accept
            </Button>
          </Grid>
          <Grid item>
            <Button variant="outlined" color="secondary" onClick={props.onDecline}>
              Decline
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
  
};
// const StudentCard = () => (
//   <>
//     <div className="container mt-4">
//       <div className="row">
//         <div className="col-9">
//           {/* {data.map((item, index) => (
//             <StudentConnectionCard key={index} {...item} />
//           ))} */}

// </div>
//       </div>
//     </div>
//   </>
// );

export default StudentConnectionCard ;
