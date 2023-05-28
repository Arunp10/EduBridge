import React, { useState } from "react";
import EducationContext from "./EducationContext";


const EduationState = (props) => {

  const host = 'http://localhost:8080'
  const initialEducation = []

  //Education useState:
  const [Education, setEducation] = useState(initialEducation);
  const [EducationData, setEducationData] = useState([])

  //Function to Add Education
  const AddEducation = async (InstituteName, degree, startDate, endDate) => {

    // API Call 
    const response = await fetch(`${host}/api/EducationRoute/AddEducation`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem('token')
      },
      //Sending Json in form of Data in Body
      body: JSON.stringify({ InstituteName, degree, startDate, endDate })
    });

    const education = await response.json();
    setEducation(Education.concat(education))
  }

  //Function to get All Education
  const getEducation = async () => {
        //API Calling:
        const response = await fetch(`${host}/api/EducationRoute/fetchEducation`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "auth-token" : localStorage.getItem('token')
          }
        });
        const json = await response.json();
        setEducation(json)
  }

const fetchEducation = async (userId) => {
  //API Calling:
  const response = await fetch(`http://localhost:8080/api/EducationRoute/fetchEducation/${userId}`, {
    method: "GET",
  });
  const json = await response.json();
  setEducationData(json)
}
  return (
    <EducationContext.Provider value={{Education, AddEducation, getEducation,fetchEducation,EducationData}}>
      {props.children}
    </EducationContext.Provider>
  )
}

export default EduationState;