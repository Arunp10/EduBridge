import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/NavBar";
// import Sidebar from "./components/SideBar";
import Dashboard from "./components/Dashboard";
import ProfileView from "./components/ProfileView";
import Appointment from "./components/Appointment";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/signup";
import Sidebar from "./components/SideBar";
import Main from './components/logout/main'

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar />
          <div class="container-fluid" id="main">
            <div class="row row-offcanvas row-offcanvas-left">
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/Home" element={<Home />} />
                {/* {user && <Route path="/" element={<Main></Main>}></Route>} */}
                <Route path="/Signup" element={<Signup />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Dashboard" element={<Dashboard />} />
                <Route path="/ProfileView" element={<ProfileView />} />
                <Route path="/Appointment" element={<Appointment/>} />
              </Routes>
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
