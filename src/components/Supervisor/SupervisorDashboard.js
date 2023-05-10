import React from "react";
// import Card from "./Card";
import Sidebar from "./SideBar";
// import profileImage from "./Assets/teacher1.jpg";
// import profileImage2 from "./Assets/teacher2.png";
// import profileImage3 from "./Assets/teacher3.png";
import { Link } from "react-router-dom";
import StudentCard from "./StudentConnectionCard";

export default function SupervisorDashboard() {
  return (
    <>
      <Sidebar />
      <div class="col main pt-5 mt-3">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <a href="/#">Home</a>
            </li>
            <li class="breadcrumb-item">
              <a href="/#">Dashboard</a>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              Supervisor
            </li>
          </ol>
        </nav>
        <p class="lead d-none d-sm-block">Students Connection</p>
        <hr />
        <StudentCard />
      </div>
    </>
  );
}
