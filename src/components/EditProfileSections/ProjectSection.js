import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import { useState, useContext } from "react";
import ProjectContext from "../context/project/ProjectContext";

export default function ProjectSection() {
  //Calling Education Context API
  const context = useContext(ProjectContext);
  let { AddProject } = context;

  //State for Education Data
  const [project, setproject] = useState({
    projectTitle: "",
    startDate: " ",
    endDate: " ",
    description: " ",
  });
  // //function to submit data to AddEducation Function
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(project);
    AddProject(
      project.projectTitle,
      project.startDate,
      project.endDate,
      project.description
    );
  };
  //Create onChange function for Required fields for Input Data:
  const onChange = (e) => {
    setproject({ ...project, [e.target.name]: e.target.value });
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
          Projects
        </Typography>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <TextField
              required
              id="project-title"
              name="projectTitle"
              label="Project Title"
              onChange={onChange}
              fullWidth
              margin="normal"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="start-date"
              onChange={onChange}
              name="startDate"
              label="Start Date"
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
              type="date"
              margin="normal"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="end-time"
              label="End Date"
              onChange={onChange}
              name="endDate"
              type="date"
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="description"
              name="description"
              label="Description"
              onChange={onChange}
              InputLabelProps={{
                shrink: true,
              }}
              fullWidth
              margin="normal"
              variant="outlined"
              multiline
            />
          </Grid>
        </Grid>
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          className="mx-3"
        >
          Add Project
        </Button>
      </Box>
    </Box>
  );
}
