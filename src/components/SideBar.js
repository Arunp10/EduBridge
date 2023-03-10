import React from "react";
import Dashboard from "./Dashboard";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <div
      class="col-md-2 col-lg-2 sidebar-offcanvas pl-0"
      id="sidebar"
      role="navigation"
      style={{ backgroundColor: "#f8f9fa" }}
    >
      <ul class="nav flex-column sticky-top pl-0 pt-5 p-3 mt-3 ">
        <li class="nav-item mb-2 mt-3">
          <a class="nav-link text-secondary" href="#">
            <h5>Aroon Kumar</h5>
          </a>
        </li>
        <li class="nav-item mb-2 ">
          <Link class="nav-link text-secondary" to="/Dashboard">
            <i class="fas fa-home font-weight-bold"></i>
            <span className="ml-3">Home</span>
          </Link>
        </li>
        <li class="nav-item mb-2">
          <a
            class="nav-link text-secondary"
            href="#submenu1"
            data-toggle="collapse"
            data-target="#submenu1"
          >
            <i class="fas fa-user font-weight-bold"></i>{" "}
            <span className="ml-3">Profile</span>
          </a>
          <ul
            class="list-unstyled flex-column pl-3 collapse"
            id="submenu1"
            aria-expanded="false"
          ></ul>
        </li>
        <li class="nav-item mb-2">
          <a class="nav-link text-secondary" href="#">
            <i class="far fa-chart-bar font-weight-bold"></i>{" "}
            <span className="ml-3">Funding</span>
          </a>
        </li>
        <li class="nav-item mb-2">
          <a class="nav-link text-secondary" href="#">
            <i class="fas fa-file-export font-weight-bold"></i>
            <span className="ml-3">My Idea</span>
          </a>
        </li>
        <li class="nav-item mb-2">
          <a class="nav-link text-secondary" href="#">
            <i class="fas fa-users font-weight-bold"></i>
            <span className="ml-3">Group</span>
          </a>
        </li>
        <li class="nav-item mb-2">
          <Link class="nav-link text-secondary" to="/Appointment">
            <i class="far fa-calendar font-weight-bold"></i>

            <span className="ml-3">Appointment</span>
          </Link>
        </li>
        <li class="nav-item mb-2">
          <a class="nav-link text-secondary" href="#">
            <i class="fas fa-atom font-weight-bold"></i>{" "}
            <span className="ml-3">Settings</span>
          </a>
        </li>
        <li class="nav-item mb-2">
          <a class="nav-link text-secondary" href="#"></a>
        </li>
        <li class="nav-item mb-2">
          <a class="nav-link text-secondary" href="#"></a>
        </li>
        <li class="nav-item mb-2">
          <a class="nav-link text-secondary" href="#"></a>
        </li>
        <li class="nav-item mb-2">
          <a class="nav-link text-secondary" href="#"></a>
        </li>
        <li class="nav-item mb-2">
          <a class="nav-link text-secondary" href="#"></a>
        </li>
        {/* <li class="nav-item mb-2">
          <a class="nav-link text-secondary" href="#"></a>
        </li> */}
        {/* <li class="nav-item mb-2">
          <a class="nav-link text-secondary" href="#"></a>
        </li>
        <li class="nav-item mb-2">
          <a class="nav-link text-secondary" href="#"></a>
        </li> */}
        <li class="nav-item mb-2">
          <Link class="nav-link text-secondary" to="/">
            <button type="button" class="btn btn-danger">
              Logout
            </button>
          </Link>
        </li>
        <li class="nav-item mb-2">
          <a class="nav-link text-secondary" href="#"></a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
