import React,{useState,useEffect} from "react";
// import Card from "./Card";
// import profileImage from "./Assets/teacher1.jpg";
// import profileImage2 from "./Assets/teacher2.png";
// import profileImage3 from "./Assets/teacher3.png";
import { Link } from "react-router-dom";
import StudentConnectionCard from "./StudentConnectionCard";

export default function SupervisorDashboard() {
  const [ConnectionData, setConnectionData] = useState([]);

const fetchConnection = async () => {
  //API Calling:
  const response = await fetch(`http://localhost:8080/api/connection/fetchConnection`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "auth-token" : localStorage.getItem('token')
    }
  });
  const json = await response.json();
  setConnectionData(json)
}
useEffect(() => {
  fetchConnection();
  console.log(ConnectionData)
})

  return (
    <>
      <div class="col main pt-5 mt-3">
        <p class="lead d-none d-sm-block">Students Connection</p>
        <hr />
        {/* <StudentCard /> */}
        <div className="container mt-4">
        <div className="row">
        <div className="col-9">
          {ConnectionData.map((connections,index)=>(
              <StudentConnectionCard key={index} FirstName={connections.userFirstName} 
              LastName={connections.userLastName} interest={connections.interest} comment={connections.comment}/> 
          ))}
         <div className="col-9"></div>
        </div>
      </div>
    </div>

    </div>
    </>
  );
}
