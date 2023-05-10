import React, { useState,useContext } from "react";
import TextField from "@mui/material/TextField";
import { Grid } from "@material-ui/core";
import { Box, Button, Typography } from "@mui/material";
import EducationContext from "../context/Education/EducationContext";

//React Function
export default function EducationSection() {

  //Calling Education Context API
  const context  = useContext(EducationContext);
  console.log(context)
  let {AddEducation} = context;

  //State for Education Data
  const [education, seteducation] = useState({
    InstitueName : "",
    degree : " ",
    startDate  : " ",
    endDate : " "
});

 //function to submit data to AddEducation Function
const handleSubmit = (e) =>{
  e.preventDefault();
  console.log(education);
  AddEducation(education.InstitueName,education.degree,education.startDate,education.endDate);
}
//Create onChange function for Required fields for Input Data:
const onChange =(e)=>{
    seteducation({...education, [e.target.name] : e.target.value})
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
  const isAddDisabled = inputList.length === 3;
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
          {" "}
          {inputList.map((input, index) => (
            <div key={index}>
              <Grid
                container
                spacing={1}
                onChange={(event) => handleInputChange(event, index)}
              >
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
                    name= "degree"
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
            type="submit"
            // disabled={isAddDisabled}
            onClick={handleSubmit}
          >
            Add Eduction
          </Button>
          
          <Button
            variant="contained"
            color="primary"
            className="mx-3"
            onClick={handleAddInput}
            disabled={isAddDisabled}
          >
            More Section
          </Button>
        </div>
      </Box>
    </Box>
  );
}
