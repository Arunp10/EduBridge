import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Sidebar from "./SideBar";
import { spacing } from "@mui/system";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

const EditProfile = () => {
  const [firstname, setfirstName] = useState("Aroon");
  const [lastname, setlastName] = useState("Kumar");
  const [email, setEmail] = useState("perchaniarun@gmail.com");
  const [work, setWork] = useState("Student");
  const [domain, setDomain] = useState("Web and ML");
  const [experience, setExperience] = useState("1 Year");
  const [isDisabled, setIsDisabled] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted!");
  };
  const handleEditProfile = () => {
    setIsDisabled(false);
  };
  const handleSaveProfile = () => {
    setIsDisabled(true);
  };
  return (
    <>
      <Sidebar />
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "#47a4f2" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Edit Profile
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={1}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="firstName"
                    label="First Name"
                    value={firstname}
                    onChange={(event) => setfirstName(event.target.value)}
                    fullWidth
                    margin="normal"
                    disabled={isDisabled}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="lastName"
                    label="Last Name"
                    value={lastname}
                    onChange={(event) => setlastName(event.target.value)}
                    fullWidth
                    margin="normal"
                    disabled={isDisabled}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    id="email"
                    label="Email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    fullWidth
                    margin="normal"
                    disabled={isDisabled}
                  />
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      name="work"
                      label="Work"
                      type="work"
                      id="work"
                      margin="normal"
                      value={work}
                      onChange={(event) => setWork(event.target.value)}
                      disabled={isDisabled}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      name="domain"
                      label="Domain"
                      type="domain"
                      id="domain"
                      margin="normal"
                      value={domain}
                      onChange={(event) => setDomain(event.target.value)}
                      disabled={isDisabled}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      name="experience"
                      label="Experience"
                      type="experience"
                      id="experience"
                      margin="normal"
                      value={experience}
                      onChange={(event) => setExperience(event.target.value)}
                      disabled={isDisabled}
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Button
                type="button"
                variant="contained"
                color="primary"
                margin="normal"
                onClick={handleEditProfile}
              >
                Edit Profile
              </Button>
              <> </>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                margin="normal"
                onClick={handleSaveProfile}
              >
                Save
              </Button>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </>
  );
};

export default EditProfile;
