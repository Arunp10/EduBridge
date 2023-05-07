import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/NavBar";
import Dashboard from "./components/Dashboard";
import Appointment from "./components/Appointment";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/signup";
import ProfileView from "./components/ProfileViewContainer/ProfileView";
import EditProfile from "./components/EditProfile";
import SupervisorDashboard from "./components/Supervisor/SupervisorDashboard"
import { Connections } from "./components/Connections";
import Availability from './components/Supervisor/Availability'

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar />
          <div className="container-fluid" id="main">
            <div className="row row-offcanvas row-offcanvas-left">
              <Routes>
                <Route exact path="/" element={<Home></Home>} />
                <Route path="/Home" element={<Home />} />
                {/* {user && <Route path="/" element={<Main></Main>}></Route>} */}
                <Route path="/signup" element={<Signup />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Dashboard" element={<Dashboard />} />
                <Route path="/ProfileView" element={<ProfileView/>} />
                <Route path="/Appointment" element={<Appointment />} />
                <Route path="/EditProfile" element={<EditProfile />} />
                <Route path="/SupervisorDashboard" element={<SupervisorDashboard />} />
                <Route path="/Connections" element={<Connections />}/>
                <Route path="/Availability" element={<Availability />}/>
              </Routes>
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
