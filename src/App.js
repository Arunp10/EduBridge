import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/NavBar";
import Dashboard from "./components/Dashboard";
import Appointment from "./components/Appointment";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/signup";
// import Sidebar from "./components/SideBar";
// import Main from './components/logout/main';
import EditProfile from "./components/EditProfile";
//Import State in App.js
import EduationState from "./components/context/Education/EducationState";
import ProjectState from "./components/context/project/ProjectState";
import WorkState from "./components/context/WorkExperience/WorkState";
import SkillSatte from "./components/context/Skill/SkillState"
import ProfileView from "./components/ProfileViewContainer/ProfileView";
import EditProfile from "./components/EditProfile";
import SupervisorDashboard from "./components/Supervisor/SupervisorDashboard"
import { Connections } from "./components/Connections";

class App extends Component {
  render() {
    return (
      <div>
        <SkillSatte>
        <WorkState>
        <ProjectState>
        <EduationState>
        <BrowserRouter>
          <Navbar />
          <div className="container-fluid" id="main">
            <div className="row row-offcanvas row-offcanvas-left">
              <Routes>
                <Route exact path="/" element={<Home></Home>} />
                {/* {user && <Route path="/" element={<Main></Main>}></Route>} */}
                <Route path="/signup" element={<Signup />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Dashboard" element={<Dashboard />} />
                <Route path="/ProfileView" element={<ProfileView/>} />
                <Route path="/Appointment" element={<Appointment />} />
                <Route path="/EditProfile" element={<EditProfile />} />
                <Route path="/SupervisorDashboard" element={<SupervisorDashboard />} />
                <Route path="/Connections" element={<Connections />}/>
              </Routes>
            </div>
          </div>
        </BrowserRouter>
        </EduationState>
       </ProjectState>
       </WorkState>
       </SkillSatte>
      </div>
    );
  }
}
export default App;
