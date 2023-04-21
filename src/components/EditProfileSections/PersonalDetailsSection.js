import {Box, Typography, Grid, TextField, Fab } from "@mui/material";
import React, { useState } from "react";

import AddIcon from '@mui/icons-material/Add';
export default function PersonalDetailsSection() {
  const [selectedFile, setSelectedFile] = useState(null);
  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0]);
  };
  const handleUpload = () => {
    // upload logic goes here
    console.log(selectedFile);
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
          <Grid item xs={12}>
            <TextField
              id="phone"
              label="Phone No"
              type="number"
              fullWidth
              margin="normal"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <label htmlFor="upload-photo">
              <input
                style={{ display: "none" }}
                id="upload-photo"
                name="upload-photo"
                type="file"
                onChange={handleFileSelect}
              />

              <Fab
                color="primary"
                size="small"
                component="span"
                aria-label="add"
                variant="extended"
                onClick={handleUpload}
              >
                <AddIcon /> Upload photo
              </Fab>
            </label>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
