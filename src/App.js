import React, { Component } from 'react';
import './App.css';
<<<<<<< HEAD
import { Route } from 'react-router-dom';
import { Redirect } from 'react-router';
import Home from './components/Home'
import Signup from './components/Signup';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Dashboardnew from './components/Dashboard';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/Home'>
          <Home />
        </Route>
        <Route path='/Signup'>
          <Signup />
        </Route>
        <Route path='/Login'>
          <Login />
        </Route>
        <Route path='/Dashboard'>
          <Dashboardnew />
        </Route>
      </div>
=======
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
>>>>>>> b3b8c4e45448a578c8297eec08e0770f7e9c3fde
    );
  }
}
export default App;