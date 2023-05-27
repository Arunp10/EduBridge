import React, { useState,useContext,useEffect } from "react";
import Card from "./Card";
import Sidebar from "./SideBar";
import profileImage from "./Assets/teacher1.jpg";
import profileImage2 from "./Assets/teacher2.png";
import profileImage3 from "./Assets/teacher3.png";
import { Link } from "react-router-dom";


export default function Dashboard() {
  const [name, setName] = useState("Your Name");
  const [domain, setDomain] = useState("Your Domain");
  const [Users, setUsers] = useState([])

  const getAllPro = async()=>{
    //API Calling:
    const response = await fetch(`http://localhost:8080/api/auth/getAllUsers`, {
        method: "GET",
      });
      const json = await response.json();
      setUsers(json)

}
  useEffect(() => {
   getAllPro();
;})
  
  return (
    <>
      <div class="col main pt-5 mt-3">
        <p class="lead d-none d-sm-block">Suggested Supervisor</p>
        <div
          class="alert alert-warning fade collapse"
          role="alert"
          id="myAlert"
        >
          <button
            type="button"
            class="close"
            data-dismiss="alert"
            aria-label="Close"
          >
            <span aria-hidden="true">×</span>
            <span class="sr-only">Close</span>
          </button>
          <strong>Data and Records</strong> Learn more about employee
        </div>
        <div class="d-flex justify-content-center">
        <Link className="nav-link" to="/SupervisorProfileView">
            {/* <Card
              image={profileImage}
              Name={user.firstName}
              Domin="Machine Learning, Datascience"
              buttonText="View profile"
              className="dashboardCard"
            ></Card> */}
          {Users.map((Users,index) => (
            <Card
            key={index}
            image={profileImage}
            firstName={Users.firstName}
            lastName={Users.lastName}
            Domin={Users.occupation}
            buttonText="View profile"
            className="dashboardCard"
          ></Card>
          ))}
          </Link>
        </div>
      </div>
    </>
  );
}
