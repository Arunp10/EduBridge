import React, { useState, useContext } from "react";
import { Grid } from "@material-ui/core";
import { Button, Typography, Autocomplete, TextField } from "@mui/material";
import SkillContext from "../context/Skill/SkillContext";
import skillArray from "./skillArray";

export default function SkillsSection() {
  const context = useContext(SkillContext);
  const { AddSkill } = context;

  const [skill, setSkill] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    AddSkill(skill);
    setSkill("");
    alert("Skills added successfully!");
  };

  const handleInputChange = (event, value) => {
    setSkill(value);
  };

  const [inputList, setInputList] = useState([{ value: "" }]);
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
        {inputList.map((input, index) => (
          <div key={index}>
            <Grid container spacing={1}>
              <Autocomplete
                options={skillArray}
                value={skill}
                onChange={handleInputChange}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label={`Skill ${index + 1}`}
                    margin="normal"
                    variant="outlined"
                    fullWidth
                    style={{ minHeight: 40, minWidth: 200 }}
                  />
                )}
              />
            </Grid>
            <Button onClick={() => handleRemoveInput(index)} disabled={isDeleteDisabled}>
              Delete
            </Button>
          </div>
        ))}
        <Button variant="contained" color="primary" className="mx-3" onClick={handleSubmit}>
          Add Skill
        </Button>
        <Button variant="contained" color="primary" onClick={handleAddInput} disabled={isAddDisabled}>
          Add More Skills
        </Button>
      </div>
    </>
  );
}
