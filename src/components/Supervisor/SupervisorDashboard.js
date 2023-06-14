import React,{useState,useEffect} from "react";
// import Card from "./Card";
// import profileImage from "./Assets/teacher1.jpg";
// import profileImage2 from "./Assets/teacher2.png";
// import profileImage3 from "./Assets/teacher3.png";
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
      <div class="col main pt-5 mt-2">
        <p class="lead d-none d-sm-block">Students Connection</p>
        <hr />
        {/* <StudentCard /> */}
        <div className="container mt-6">
        <div className="row">
        <div className="col-9 pt-9">
          {ConnectionData.map((connections,index)=>(
            <div className="mt-3">

              <StudentConnectionCard key={index} FirstName={connections.user.firstName} 
              LastName={connections.user.lastName} interest={connections.interest} comment={connections.comment}/> 

              <StudentConnectionCard key={index} FirstName={connections.userFirstName} 
              LastName={connections.userLastName} interest={connections.interest} comment={connections.comment}/> 
              </div>
          ))}
        </div>
      </div>
    </div>
    </div>
    </>
  );
}