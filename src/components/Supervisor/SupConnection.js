import { Avatar, Box, Grid, Typography } from "@mui/material";
import ConnectionCard from "./SupConnectionCard";
import img1 from "../Assets/teacher1.png";
import img2 from "../Assets/teacher2.png";
import img3 from "../Assets/teacher3.png";
import img4 from "../Assets/teacher1.jpg";
import PeopleRoundedIcon from '@mui/icons-material/PeopleRounded';

const connections = [
  {
    recipientName: "Laksh Kumar",
    avatarSrc: img1,
  },
  {
    recipientName: "Sana",
    avatarSrc: img2,
  },
  {
    recipientName: "Hinesh Kumar",
    avatarSrc: img3,
  },
  {
    recipientName: "Aroon Kumar",
    avatarSrc: img4,
  },
  {
    recipientName: "Neeraj Kumar",
    avatarSrc: img1,
  },
  {
    recipientName: "Shubash Kumar",
    avatarSrc: img3,
  },
];

export function SupConnection() {
  return (
    <>
      <Box sx={{ width: "83%", pt: 2, pl: 2 }}>
        <Box sx={{ alignItems: "center", display: "flex" }}>
          <Avatar sx={{ m: 1, bgcolor: "#47a4f2" }}>
            <PeopleRoundedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Connections
          </Typography>
        </Box>
        <hr></hr>
        <Box sx={{ pt: 2, pl: 1}}>
          <Grid container spacing={2} direction="row">
            {connections.map((request, index) => (
              <Grid item key={index} xs={4}>
                <ConnectionCard
                  recipientName={request.recipientName}
                  avatarSrc={request.avatarSrc}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </>
  );
}