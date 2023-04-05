import React, { useState } from "react";
import Card from "./Card";
import Sidebar from "./SideBar";
import profileImage from "./Assets/teacher1.jpg";
import profileImage2 from "./Assets/teacher2.png";
import profileImage3 from "./Assets/teacher3.png";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const [name, setName] = useState("Your Name");
  const [domain, setDomain] = useState("Your Domain");

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
              Student
            </li>
          </ol>
        </nav>
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
          <Link className="nav-link" to="/Portfolio">
            <Card
              image={profileImage}
              Name="Mr. Amir Ali"
              Domin="Machine Learning, Datascience"
              buttonText="View profile"
              className="dashboardCard"
            ></Card>
          </Link>
          <Card
            image={profileImage2}
            Name="Ms. Sana Khan"
            Domin="Web Development, Framework Assets"
            buttonText="View profile"
            className="dashboardCard"
          ></Card>
          <Card
            image={profileImage3}
            Name="Mr. Ahmed Ayub"
            Domin="Machine Learning, Datascience"
            buttonText="View profile"
            className="dashboardCard"
          ></Card>
        </div>
        <hr />
      </div>
    </>
  );
}
