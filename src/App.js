import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/NavBar";
import Dashboard from "./components/Dashboard";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/signup";
import EduationState from "./components/context/Education/EducationState";
import ProjectState from "./components/context/project/ProjectState";
import WorkState from "./components/context/WorkExperience/WorkState";
import SkillState from "./components/context/Skill/SkillState";
import ProfileView from "./components/UserProfileView/ProfileView";
import SupervisorProfileView from "./components/Supervisor/SupervisorProfileView/ProfileView";
import EditProfile from "./components/EditProfile";
import SupervisorDashboard from "./components/Supervisor/SupervisorDashboard";
import { Connections } from "./components/Connections"
import ShowAvailability from "./components/Supervisor/Supervisor Availability/ShowAvailability"
import Sidebar from "./components/SideBar";
import UserState from "./components/context/User/UserState";
import SupSidebar from "./components/Supervisor/SupSideBar";
import { SupConnection } from "./components/Supervisor/SupConnection";
import ShowFunding from "./components/Supervisor/SupervisorFunding/ShowFunding"
import ViewAppointment from "./components/Supervisor/SupervisorAppointments/ViewAppointments"
import ShowAppointments from "./components/UserAppointmentsPage/ShowAppointments"
import UserFundingDetails from "./components/UserFunding/UserFundingDetails"
import { ChatContextProvider } from "./components/context/chatContext";
import Chat from "./components/chat/Chat";

const App = () => {
  //Fetch API
  const host = "http://localhost:8080";

  const [user, setuser] = useState([]);
  //Function to get User Details:
  const getUser = async () => {
    //API Calling:
    const response = await fetch(`${host}/api/auth/getUser`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });
    const json = await response.json();
    setuser(json);
  };

  let [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    if (localStorage.getItem("token")) {
      setIsLoggedIn(true);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    window.location.href = "/"; // Redirect to the home page
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      getUser();
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  });

  return (
    <div>
      <ChatContextProvider user={user}>
      <SkillState>
        <WorkState>
          <ProjectState>
            <EduationState>
              <UserState>
                <BrowserRouter>
                  <Navbar />
                  <div className="container-fluid" id="main">
                    <div className="row row-offcanvas row-offcanvas-left">
                      {localStorage.getItem("occupation") === "Professional" &&
                        isLoggedIn && (
                          <SupSidebar
                            handleLogout={handleLogout}
                            isLoggedIn={isLoggedIn}
                            firstName={user.firstName}
                            lastName={user.lastName}
                          />
                        )}

                      {localStorage.getItem("occupation") === "Student" &&
                        isLoggedIn && (
                          <Sidebar
                            handleLogout={handleLogout}
                            isLoggedIn={isLoggedIn}
                            firstName={user.firstName}
                            lastName={user.lastName}
                          />
                        )}
                      <Routes>
                        <Route
                          path="/"
                          element={
                            localStorage.getItem("occupation") === "Student" &&
                            isLoggedIn ? (
                              <Navigate to="/dashboard" />
                            ) : localStorage.getItem("occupation") ===
                                "Professional" && isLoggedIn ? (
                              <Navigate to="/supervisordashboard" />
                            ) : (
                              <Home />
                            )
                          }
                        />
                        <Route path="/signup" element={<Signup />} />
                        <Route
                          path="/login"
                          element={
                            localStorage.getItem("occupation") === "Student" &&
                            isLoggedIn ? (
                              <Navigate to="/dashboard" />
                            ) : localStorage.getItem("occupation") ===
                                "Professional" && isLoggedIn ? (
                              <Navigate to="/supervisordashboard" />
                            ) : (
                              <Login onLogin={handleLogin} />
                            )
                          }
                        />
                        {isLoggedIn && (
                          <>
                            <Route path="/dashboard" element={<Dashboard />} />
                            <Route
                              path="/profileview"
                              element={<ProfileView />}
                            />
                            <Route
                              path="/chat"
                              element={<Chat user={user} />}
                            />
                            <Route
                              path="/ViewAppointment"
                              element={<ViewAppointment />}
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
                              path="/SupConnection"
                              element={<SupConnection />}
                            />
                            <Route
                              path="/connections"
                              element={<Connections />}
                            />
                            <Route
                              path="/ProfileView"
                              element={<ProfileView />}
                            />
                            <Route
                              path="/SupervisorProfileView/:id"
                              element={<SupervisorProfileView />}
                            />
                            <Route
                              path="/ShowAvailability"
                              element={<ShowAvailability />}
                            />
                            <Route
                              path="/ShowFunding"
                              element={<ShowFunding />}
                            />
                            <Route
                              path="/ShowAppointments"
                              element={<ShowAppointments />}
                            />
                            <Route
                              path="/UserFundingDetails"
                              element={<UserFundingDetails  />}
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
      </ChatContextProvider>
    </div>
  );
};

export default function MainApp() {
  return <App />;
}
