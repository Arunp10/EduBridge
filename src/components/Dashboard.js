import React, { useState, useEffect } from "react";
import profileImage from "./Assets/teacher1.jpg";
import {useNavigate } from "react-router-dom";


export default function Dashboard() {

  //user State to fetch Data
  const [Users, setUsers] = useState([])

  //Function to fetch All Supervisors
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

//Create card for Supervisor View
const Card = ({id,firstName,lastName,Domin,image,onClick}) => {
  const navigate = useNavigate();

  const handleClick = () =>{
    onClick(id,navigate);
  }
  return (
      <div className="Card-pattren">
        <div className="card-image">
          <img src={image} alt="profile" className="circle-img" />
        </div>
        <div className="card-content">
          <h2>{firstName} {""} {lastName}</h2>
          <p>{Domin}</p>
        </div>
        <div className="card-action">
              <button onClick={handleClick} className="btn btn-primary btn-sm">View Profile</button>
        </div>
      </div>
  );
}
const handleCardClick = (id,navigate)=>{
  navigate(`/SupervisorProfileView/${id}`);
}
  return (
    <>
      <div className="col main pt-5 mt-3">
        <p className="lead d-none d-sm-block">Suggested Supervisor</p>
        <div
          className="alert alert-warning fade collapse"
          role="alert"
          id="myAlert"
        >
          <button
            type="button"
            className="close"
            data-dismiss="alert"
            aria-label="Close"
          >
            <span aria-hidden="true">×</span>
            <span class="sr-only">Close</span>
          </button>
          <strong>Data and Records</strong> Learn more about employee
        </div>
        <div class="d-flex justify-content-center">
            {/* <Card
              image={profileImage}
              Name={user.firstName}
              Domin="Machine Learning, Datascience"
              buttonText="View profile"
              className="dashboardCard"
            ></Card> */}
          {Users.map((Users,index) => (
            <Card
            key={Users._id}
            id={Users._id}
            onClick={handleCardClick}
            image={profileImage}
            firstName={Users.firstName}
            lastName={Users.lastName}
            domin={Users.occupation}
            className="dashboardCard"
          ></Card>
          ))}
          
        </div>
      </div>
    </>
  );
}
