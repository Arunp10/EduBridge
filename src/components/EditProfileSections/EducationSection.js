import React, { useState, useContext } from "react";
import TextField from "@mui/material/TextField";
import { Grid } from "@material-ui/core";
import { Box, Button, Typography } from "@mui/material";
import EducationContext from "../context/Education/EducationContext";
import DynamicTable from "./DynamicTable";

//React Function
export default function EducationSection() {
  //Calling Education Context API
  const context = useContext(EducationContext);
  console.log(context);
  let { AddEducation } = context;

  //State for Education Data
  const [education, seteducation] = useState({
    InstitueName: "",
    degree: " ",
    startDate: " ",
    endDate: " ",
  });

  //function to submit data to AddEducation Function
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(education);
    AddEducation(
      education.InstitueName,
      education.degree,
      education.startDate,
      education.endDate
    );
  };
  //Create onChange function for Required fields for Input Data:
  const onChange = (e) => {
    seteducation({ ...education, [e.target.name]: e.target.value });
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
          Education
        </Typography>
        <div>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="InstitueName"
                name="InstitueName"
                label="Institue Name"
                fullWidth
                margin="normal"
                variant="outlined"
                onChange={onChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="degree"
                name="degree"
                label="Degree"
                fullWidth
                margin="normal"
                variant="outlined"
                onChange={onChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="startDate"
                name="startDate"
                type="date"
                label="From"
                fullWidth
                margin="normal"
                variant="outlined"
                onChange={onChange}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="endDate"
                label="To"
                name="endDate"
                type="date"
                fullWidth
                margin="normal"
                variant="outlined"
                onChange={onChange}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
          </Grid>
        </div>
        <Button
          variant="contained"
          color="primary"
          type="submit"
          // disabled={isAddDisabled}
          onClick={handleSubmit}
        >
          Add Eduction
        </Button>
      </Box>
    </Box>
  );
}
