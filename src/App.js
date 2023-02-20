import React, { Component } from 'react';
import './App.css';
import Signup from './components/signup'
import NavBar from './components/NavBar'
import SideBar from './components/SideBar'
import Dashboard from './components/Dashboard';
class App extends Component {
  render() {
    return (
      // <div>
      //   <Signup />
      // </div>
      <div>
            <NavBar/>
                <div class="container-fluid" id="main">
                 <div class="row row-offcanvas row-offcanvas-left">
                   <SideBar/>
                   <Dashboard/>
             </div>
            </div>  
        </div> 
    );
  }
}
export default App;