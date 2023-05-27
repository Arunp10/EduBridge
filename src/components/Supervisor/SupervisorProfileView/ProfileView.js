import React,{useEffect,useState,useContext} from "react";
import Profile from "./Profile";
import View from "./View";
import { Box } from "@mui/material";
import UserContext from "../../context/User/UserContext";

export default function ProfileView() {
  const context = useContext(UserContext);
  const {userData,fetchSupervisor} = context;

  useEffect(() => {
    fetchSupervisor();
    console.log(userData)
  })
  
  return (
    <>
    <Box sx={{ width: "83%", pt: 0, pl: 0 }}>
      <div className="profileview-container">
        <Profile firstName={userData.firstName} lastName={userData.lastName} occupation="" />
        <View/>
      </div>
    </Box>
    </>
  );
}
