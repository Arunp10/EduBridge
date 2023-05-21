import React from "react";
// import Card from "./Card";
// import profileImage from "./Assets/teacher1.jpg";
// import profileImage2 from "./Assets/teacher2.png";
// import profileImage3 from "./Assets/teacher3.png";
import { Link } from "react-router-dom";
import StudentCard from "./StudentConnectionCard";

export default function SupervisorDashboard() {
  return (
    <>
      <div class="col main pt-5 mt-3">
        <p class="lead d-none d-sm-block">Students Connection</p>
        <hr />
        <StudentCard />
      </div>
    </>
  );
}
