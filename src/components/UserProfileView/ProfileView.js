import React,{useContext,useEffect} from "react";
import Profile from "./Profile";
import View from "./View";
import { Box } from "@mui/material";
import UserContext from "../context/User/UserContext";

export default function ProfileView() {
  const usercontext = useContext(UserContext);
  const {user,getUser} = usercontext;
  useEffect(() => {
    getUser();
    console.log(user.image)
  })
  return (
    <>
    <Box sx={{ width: "83%", pt: 0, pl: 0 }}>
      <div className="profileview-container">
        <Profile img={`../uploads/${user.image}`} firstName={user.firstName} lastName={user.lastName} occupation={user.occupation} />
        <View/>
      </div>
    </Box>
    </>
  );
}
