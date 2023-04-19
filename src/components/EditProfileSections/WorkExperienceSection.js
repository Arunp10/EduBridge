import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import { useState } from "react";
export default function WorkExperienceSection() {
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
                    id="job-title"
                    label="Job Title"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="employer"
                    label="Employer"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="start-date"
                    label="Start Date"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="end-time"
                    label="End Date"
                    type="number"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="description"
                    label="Description"
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
