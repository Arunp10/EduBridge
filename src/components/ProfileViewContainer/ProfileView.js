import React,{useContext,useEffect} from "react";
import Profile from "./Profile";
import View from "./View";
import { Box } from "@mui/material";
import EducationContext from "../context/Education/EducationContext";


export default function ProfileView() {
  
  return (
    <>
    <Box sx={{ width: "83%", pt: 0, pl: 0 }}>
      <div className="profileview-container">
        <Profile name="Laksh Choithani" />
        <View/>
      </div>
    </Box>
    </>
  );
}
