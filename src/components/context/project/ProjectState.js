import React, { useState } from "react";
import ProjectContext from "./ProjectContext";

 const ProjectState = (props)=>{
  
    const host = 'http://localhost:8080'
    const initialProject = []

    const [Project, setProject] = useState(initialProject);

    //Add Education
  const AddProject = async (projectTitle, startDate, endDate,description) => {
    
  // API Call 
  const response = await fetch(`${host}/api/ProjectRoute/AddProject`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQzYWQwZTcyZTFiMGU1MzMxNmUxNDIyIn0sImlhdCI6MTY4Mjc3NDIxNH0.7f6pttRqof4lnCHStZqmr5q9twXtNwQEoP2py6_tWd4"
    },
    //Sending Json in form of Data
    body: JSON.stringify({projectTitle, startDate,endDate,description})
  });

  const project = await response.json();
  setProject(Project.concat(project))
}

return (
  <ProjectContext.Provider value={{Project, AddProject}}>
    {props.children}
  </ProjectContext.Provider>
)
}

export default ProjectState;