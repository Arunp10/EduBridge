import React,{useState} from "react";
import UserContext from "./UserContext";

const UserState = (props)=>{
    const host = 'http://localhost:8080'
    const initialUser = []

    const [user, setuser] = useState(initialUser);
    const [userData,setuserData] = useState([]);

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

    const getAllUsers = async(webToken)=>{
      //API Calling:
      const response = await fetch(`${host}/api/auth/getUser`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "auth-token" : webToken
          }
        });
        const json = await response.json();
        setuser(json)
  }

  const fetchSupervisor = async()=>{
    const response = await fetch("http://localhost:8080/api/auth/fetchUser/645f9f6157131c95c4413fa6", {
      method: "GET",
    });
    const json = await response.json();
    setuserData(json);
  }
    return (

        <UserContext.Provider value={{user, getUser,userData,fetchSupervisor}}>
            {props.children}
        </UserContext.Provider>
      )
}

export default UserState