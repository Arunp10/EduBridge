import React, { useState } from "react";
import EducationContext from "./EducationContext";

 const EduationState = (props)=>{
    const host = 'http://localhost:8080'
    const initialEducation = []

    const [Education, setEducation] = useState(initialEducation);

    //Add Education
  const AddEducation = async (InstituteName, degree, startDate, endDate) => {
    
  // API Call 
  const response = await fetch(`${host}/api/EducationRoute/AddEducation`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQzYWQwZTcyZTFiMGU1MzMxNmUxNDIyIn0sImlhdCI6MTY4Mjc3NDIxNH0.7f6pttRqof4lnCHStZqmr5q9twXtNwQEoP2py6_tWd4"
    },
    //Sending Json in form of Data
    body: JSON.stringify({InstituteName, degree, startDate,endDate})
  });

  const education = await response.json();
  setEducation(Education.concat(education))
}
 }