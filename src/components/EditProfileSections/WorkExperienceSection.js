import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React,{ useState,useContext } from "react";
import WorkContext from "../context/WorkExperience/WorkContext";



export default function WorkExperienceSection() {
  //Calling Education Context API
  const context  = useContext(WorkContext);
  let {AddWork} = context;

  //State for Education Data
  const [work, setwork] = useState({
    title : "",
    employee : " ",
    startDate  : " ",
    endDate : " ",
    description : " "
});

// //function to submit data to Add Work Experience Function
const handleSubmit = (e) =>{
  e.preventDefault();
  console.log(work);
  AddWork(work.title,work.employee,work.startDate,work.endDate,work.description);
}
//Create onChange function for Required fields for Input Data:
const onChange =(e)=>{
    setwork({...work, [e.target.name] : e.target.value})
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
          Work Experience
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
                    name = "title"
                    id="job-title"
                    label="Job Title"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    onChange={onChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    name = "employee"
                    id="employer"
                    label="Employer"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    onChange={onChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    type="date"
                    name = "startDate"
                    id="startDate"
                    label="Start Date"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    onChange={onChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    name ="endDate"
                    id="endDate"
                    label="End Date"
                    type="date"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    onChange={onChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                  name = "description"
                    id="description"
                    label="Description"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    onChange={onChange}
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
            className="mx-3"
            onClick={handleSubmit}
          >
            Add Work Experience
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
