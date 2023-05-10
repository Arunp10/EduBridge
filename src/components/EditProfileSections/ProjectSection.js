import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import { useState,useContext } from "react";
import ProjectContext from "../context/project/ProjectContext";

export default function ProjectSection() {
    //Calling Education Context API
    const context  = useContext(ProjectContext);
    let {AddProject} = context;

  //State for Education Data
  const [project, setproject] = useState({
    projectTitle : "",
    startDate : " ",
    endDate  : " ",
    description: " "
});
// //function to submit data to AddEducation Function
const handleSubmit = (e) =>{
  e.preventDefault();
  console.log(project);
  AddProject(project.projectTitle,project.startDate,project.endDate,project.description);
}
//Create onChange function for Required fields for Input Data:
const onChange =(e)=>{
    setproject({...project, [e.target.name] : e.target.value})
}

  const [inputList, setInputList] = useState([{ value: "" }]);

  const handleInputChange = (event, index) => {
    const newInputList = [...inputList];
    newInputList[index].value = event.target.value;
    setInputList(newInputList);
  };
  const handleRemoveInput = (index) => {
    const newInputList = inputList.filter((input, i) => i !== index);
    setInputList(newInputList);
  };
  const handleAddInput = () => {
    if (inputList.length < 3) {
      setInputList([...inputList, { value: "" }]);
    }
  };
  const isDeleteDisabled = inputList.length === 1;
  const isAddDisabled = inputList.length >= 3;
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
        <div>
          {" "}
          {inputList.map((input, index) => (
            <div key={index}>
              <Grid
                container
                spacing={1}
                onChange={(event) => handleInputChange(event, index)}
              >
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
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="description"
                    name="description"
                    label="Description"
                    onChange={onChange}
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    multiline
                  />
                </Grid>
              </Grid>
              <Button
                onClick={() => handleRemoveInput(index)}
                disabled={isDeleteDisabled}
              >
                Delete
              </Button>
            </div>
          ))}
           <Button
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            className="mx-3"
          >
            Add Project
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={handleAddInput}
            disabled={isAddDisabled}
          >
            Add Section
          </Button>
        </div>
      </Box>
    </Box>
  );
}
