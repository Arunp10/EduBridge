import { Box, Typography, Grid, TextField, Button } from "@mui/material";
// import {Box, Typography, Grid, TextField, Fab } from "@mui/material";
import React, { useState } from "react";
import axios from 'axios';


export default function PersonalDetailsSection() {
  const [selectedFile, setselectedFile] = useState(null);

  const handleFileChange = (event) => {
    setselectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      return;
    }
    const formData = new FormData();
    formData.append('image', selectedFile);

    try {
      await axios.put(`http://localhost:8080/api/users/uploadImg`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          "auth-token": localStorage.getItem('token')
        },
      });
      alert('Profile Image updated successfully');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Box
      sx={{
        marginTop: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box component="form" noValidate sx={{ mt: 0 }}>
        <Typography variant="overline" textAlign={"center"}>
          Personal Details
        </Typography>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="firstName"
              label="First Name"
              fullWidth
              margin="normal"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="lastName"
              label="Last Name"
              fullWidth
              margin="normal"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="email"
              label="Email"
              fullWidth
              margin="normal"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} md={12} pl={15}>
            <Button variant="contained" color="primary">
              Update Profile
            </Button>
            <Grid item xs={4} md={12} pt={2}>
            <input accept="image/*" type="file" id="select-image" onChange={handleFileChange}/>
            <label htmlFor="select-image">
              <Button variant="contained" color="primary" onClick={handleUpload}>
                Upload Picture
              </Button>
            </label>
          </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
