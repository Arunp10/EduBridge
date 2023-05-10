import React, { useState } from "react";
import WorkContext from "./WorkContext";

//Add Work Experience through API
const  WorkState = (props) =>{

    const host = 'http://localhost:8080'
    const initialWork = []

    const [Work, setWork] = useState(initialWork);

    //Add Addwork
    const AddWork = async(title,employee,startDate,endDate,description)=>{
        // API Call 
  const response = await fetch(`${host}/api/WorkExperienceRoute/AddWorkExperience`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQzYWQwZTcyZTFiMGU1MzMxNmUxNDIyIn0sImlhdCI6MTY4Mjc3NDIxNH0.7f6pttRqof4lnCHStZqmr5q9twXtNwQEoP2py6_tWd4"
    },
    //Sending Json in form of Data
    body: JSON.stringify({title, employee,startDate,endDate,description})
  });

  const work = await response.json();
  setWork(Work.concat(work))
}


return(
<WorkContext.Provider value={{Work, AddWork}}>
    {props.children}
</WorkContext.Provider>
)
}
export default WorkState;