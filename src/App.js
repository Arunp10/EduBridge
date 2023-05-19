import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/NavBar";
import Dashboard from "./components/Dashboard";
import Appointment from "./components/Appointment";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/signup";
import EduationState from "./components/context/Education/EducationState";
import ProjectState from "./components/context/project/ProjectState";
import WorkState from "./components/context/WorkExperience/WorkState";
import SkillSatte from "./components/context/Skill/SkillState";
import ProfileView from "./components/ProfileViewContainer/ProfileView";
import EditProfile from "./components/EditProfile";
import SupervisorDashboard from "./components/Supervisor/SupervisorDashboard";
import { Connections } from "./components/Connections";
import Sidebar from "./components/SideBar";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

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
                    {isLoggedIn && <Sidebar />}
                    <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/signup" element={<Signup />} />
                      <Route
                        path="/login"
                        element={<Login onLogin={handleLogin} />}
                      />
                      {isLoggedIn && (
                        <>
                          <Route path="/dashboard" element={<Dashboard />} />
                          <Route
                            path="/profileview"
                            element={<ProfileView />}
                          />
                          <Route
                            path="/appointment"
                            element={<Appointment />}
                          />
                          <Route
                            path="/editprofile"
                            element={<EditProfile />}
                          />
                          <Route
                            path="/supervisordashboard"
                            element={<SupervisorDashboard />}
                          />
                          <Route
                            path="/connections"
                            element={<Connections />}
                          />
                        </>
                      )}
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
};

export default function MainApp() {
  return <App />;
}
