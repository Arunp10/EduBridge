import React, { Component } from 'react';
import './App.css';
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
    );
  }
}
 
export default App;