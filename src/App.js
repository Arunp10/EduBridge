import React, { Component } from 'react';
import './App.css';
import Signup from './components/signup'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard';
import Appointment from './components/Appointment';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
class App extends Component {
  render() {
    return (
        <div>
          <Navbar />
                  <div class="container-fluid" id="main">
                  <div class="row row-offcanvas row-offcanvas-left">
                  <Dashboard />
                <Route path="/Appointment"><Appointment /></Route> 
              </div>
              </div> 
          </div> 
    );
  }
}
export default App;