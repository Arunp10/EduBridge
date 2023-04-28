import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Grid } from "@material-ui/core";
import { Button, Typography } from "@mui/material";
export default function SkillsSection() {
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
    <>
      <Typography variant="overline" textAlign={"center"}>
        Skills and Domain
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
              <TextField
                id="skill"
                label={`Skill ${index + 1}`}
                margin="normal"
                variant="outlined"
              />
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
          Add More Skills
        </Button>
      </div>
    </>
  );
}
