import React,{useState} from "react";
import UserContext from "./UserContext";

const UserState = (props)=>{
    const host = 'http://localhost:8080'
    const initialUser = []

    const [user, setuser] = useState(initialUser)

    //Function to get User Details: 
    const getUser = async()=>{
        //API Calling:
        const response = await fetch(`${host}/api/auth/getUser`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "auth-token" : localStorage.getItem('token')
            }
          });
          const json = await response.json();
          setuser(json)
    }

    return (

        <UserContext.Provider value={{user, getUser}}>
            {props.children}
        </UserContext.Provider>
      )
}

export default UserState