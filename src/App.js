import React, { useContext, useState,useEffect } from "react";
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
import SkillState from "./components/context/Skill/SkillState";
import ProfileView from "./components/ProfileViewContainer/ProfileView";
import EditProfile from "./components/EditProfile";
import SupervisorDashboard from "./components/Supervisor/SupervisorDashboard";
import { Connections } from "./components/Connections";
import Sidebar from "./components/SideBar";
import UserState from "./components/context/User/UserState";
import SupSidebar from "./components/Supervisor/SupSideBar";

const App = () => {
  //Fetch API
  const host = 'http://localhost:8080'
    const initialUser = []

    const [user, setuser] = useState(initialUser)

    //Function to get User Details: 
    const getUser = async()=>{
        //API Calling:
        const response = await fetch(`${host}/api/auth/getUser`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "auth-token" : localStorage.getItem('token')
            }
          });
          const json = await response.json();
          setuser(json)
    }

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    if(localStorage.getItem('token')){
      setIsLoggedIn(true);
    }
  };

  useEffect(() => {
    // if(localStorage.getItem('token')){
      getUser();
    // }else{
    //   window.BrowserRouter('/');
    // }
  },)

  return (
    <div>
      <SkillState>
        <WorkState>
          <ProjectState>
            <EduationState>
             <UserState> 
              <BrowserRouter>
                <Navbar />
                <div className="container-fluid" id="main">
                  <div className="row row-offcanvas row-offcanvas-left">
                  {localStorage.getItem('occupation') === "Professional" &&  isLoggedIn && <SupSidebar  firstName={user.firstName} lastName={user.lastName} />}

                    {localStorage.getItem('occupation') === "Student" &&  isLoggedIn && <Sidebar  />}
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

              </UserState>
            </EduationState>
          </ProjectState>
        </WorkState>
      </SkillState>
    </div>
  );
};

export default function MainApp() {
  return <App />;
}