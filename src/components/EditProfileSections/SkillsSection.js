import React, { useState,useContext } from "react";
import TextField from "@mui/material/TextField";
import { Grid } from "@material-ui/core";
import { Button, Typography } from "@mui/material";
import SkillContext from "../context/Skill/SkillContext";

export default function SkillsSection() {

  //Calling Education Context API
  const context  = useContext(SkillContext);
  let {AddSkill} = context;

//State for Education Data
const [skill, setskill] = useState({
  skillName : "",
});
// //function to submit data to AddEducation Function
const handleSubmit = (e) =>{
e.preventDefault();
  AddSkill(skill.skillName)
}
//Create onChange function for Required fields for Input Data:
const onChange =(e)=>{
  setskill({...skill, [e.target.name] : e.target.value})
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
                name="skillName"
                onChange={onChange}
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
          className="mx-3"
          onClick={handleSubmit}
        >
          Add Skill
        </Button>
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
