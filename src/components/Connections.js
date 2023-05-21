import { Avatar, Box, Grid, Typography } from "@mui/material";
import ConnectionCard from "./ConnectionCard";
import Sidebar from "./SideBar";
import img1 from "./Assets/teacher1.png";
import img2 from "./Assets/teacher2.png";
import img3 from "./Assets/teacher3.png";
import img4 from "./Assets/teacher1.jpg";
import PeopleRoundedIcon from '@mui/icons-material/PeopleRounded';

const sentRequests = [
  {
    recipientName: "John Doe",
    sentDate: "2022-03-15",
    status: "Pending",
    avatarSrc: img1,
  },
  {
    recipientName: "Ms Sana",
    sentDate: "2022-02-28",
    status: "Accepted",
    avatarSrc: img2,
  },
  {
    recipientName: "Mr. Ahmed Ayub",
    sentDate: "2022-01-10",
    status: "Declined",
    avatarSrc: img3,
  },
  {
    recipientName: "Mr Amir Ali",
    sentDate: "2022-01-10",
    status: "Accepted",
    avatarSrc: img4,
  },
];

export function Connections() {
  return (
    <>
      <Box sx={{ width: "83%", pt: 2, pl: 12 }}>
        <Box sx={{ alignItems: "center", display: "flex" }}>
          <Avatar sx={{ m: 1, bgcolor: "#47a4f2" }}>
            <PeopleRoundedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Connections
          </Typography>
        </Box>
        <hr></hr>
        <Box sx={{ pt: 2, pl: 2 }}>
          <Grid item xs={4}>
            <Grid container spacing={2}>
              {sentRequests.map((request, index) => (
                <Grid item key={index} xs={6}>
                  <Grid item xs={12}>
                    <ConnectionCard
                      recipientName={request.recipientName}
                      sentDate={request.sentDate}
                      status={request.status}
                      avatarSrc={request.avatarSrc}
                    />
                  </Grid>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}
