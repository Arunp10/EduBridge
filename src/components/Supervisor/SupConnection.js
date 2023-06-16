import { Avatar, Box, Grid, Typography } from "@mui/material";
import ConnectionCard from "./SupConnectionCard";
import img1 from "../Assets/teacher1.png";
import img2 from "../Assets/teacher2.png";
import img3 from "../Assets/teacher3.png";
import img4 from "../Assets/teacher1.jpg";
import PeopleRoundedIcon from '@mui/icons-material/PeopleRounded';
import { useState } from "react";
import { useEffect } from "react";




export function SupConnection() {
  const [Connections, setConnections] = useState([]);

  const fetchApprovedConnection = async()=>{
    const response = await fetch(`http://localhost:8080/api/connection/fetchConnection`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "auth-token" : localStorage.getItem('token')
    }
  });
  const json = await response.json();
  const ApprovedConnection = json.filter(connection => connection.status === 'approved');
  setConnections(ApprovedConnection)
  }
  useEffect(() => {
    fetchApprovedConnection();
  
  },[])
  
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
        <Box sx={{ pt: 2, pl: 1}}>
          <Grid container spacing={2} direction="row">
            {Connections.map((connection) => (
              <Grid item key={connection._id} xs={4}>
                <ConnectionCard
                  recipientFirstName={connection.user.firstName}
                  recipientLastName={connection.user.lastName}
                  avatarSrc={img1}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </>
  );
}