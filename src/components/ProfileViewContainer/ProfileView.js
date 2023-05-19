import React from "react";
import Profile from "./Profile";
import View from "./View";
import SideBar from "../SideBar"
import { Box } from "@mui/material";

  const user = {
    education: [
      {
        domain: "Bachelor's in Computer Science",
        institution: 'Dha suffa university, karachi',
        startDate: 'Oct 2019',
        endDate: 'July 2023',
      }, 
      {
        domain: "Master's in Software Engineering",
        institution: 'Coventry University of london',
        startDate: 'Jan 2014',
        endDate: 'Dec 2026',
      },
    ],
    workHistory: [
      {
        position: 'Software Engineer',
        company: 'Google',
        startDate: 'Jan 2019',
        endDate: 'Dec 2020',
      },
      {
        position: 'Senior Software Engineer',
        company: 'Facebook',
        startDate: 'Jan 2021',
        endDate: 'Present',
      },
    ],
    projects: [
      {
        title: 'Project 1',
        startDate: 'Jan 2020',
        endDate: 'Dec 2020',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
      {
        title: 'Project 2',
        startDate: 'Jan 2021',
        endDate: 'Dec 2021',
        description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
      },
      {
        title: 'Project 3',
        startDate: 'Jan 2022',
        endDate: 'Dec 2022',
        description: 'Suspendisse vitae eleifend ex. Nulla sed elit eget elit vestibulum rutrum non at sem.',
      },
      {
        title: 'Project 3',
        startDate: 'Jan 2022',
        endDate: 'Dec 2022',
        description: 'Suspendisse vitae eleifend ex. Nulla sed elit eget elit vestibulum rutrum non at sem.',
      },
    ],
    programmingSkills: [
      "JavaScript", "React", "Node.js", "Python"
    ]
  };

export default function ProfileView() {
  return (
    <>
    <Box sx={{ width: "83%", pt: 0, pl: 0 }}>
      <div className="profileview-container">
        <Profile name="Laksh Choithani" />
        <View {...user}/>
      </div>
    </Box>
    </>
  );
}
