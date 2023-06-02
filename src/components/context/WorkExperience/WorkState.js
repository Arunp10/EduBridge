import React, { useState } from "react";
import WorkContext from "./WorkContext";

//Add Work Experience through API
const  WorkState = (props) =>{

    const host = 'http://localhost:8080'
    const initialWork = []

    const [Work, setWork] = useState(initialWork);
    const [WorkData, setWorkData] = useState(initialWork);

    //Add Addwork
    const AddWork = async(title,employee,startDate,endDate,description)=>{
        // API Call 
  const response = await fetch(`${host}/api/WorkExperienceRoute/AddWorkExperience`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      "auth-token": localStorage.getItem('token')
    },
    //Sending Json in form of Data
    body: JSON.stringify({title, employee,startDate,endDate,description})
  });

  const work = await response.json();
  setWork(Work.concat(work))
}

const getWork = async()=>{

  const response = await fetch(`${host}/api/WorkExperienceRoute/fetchWorkExperience`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      "auth-token": localStorage.getItem('token')
    },
  });
  const json = await response.json();
  setWork(json);
}

const fetchWork = async(userId)=>{

  const response = await fetch(`http://localhost:8080/api/WorkExperienceRoute/fetchWork/${userId}`, {
    method: 'GET',
  });
  const json = await response.json();
  setWorkData(json);
}

return(
<WorkContext.Provider value={{Work, AddWork, getWork,fetchWork,WorkData}}>
    {props.children}
</WorkContext.Provider>
)
}
export default WorkState;