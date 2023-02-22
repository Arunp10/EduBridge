import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from 'react-router-dom';
import elogo from '../images/elogo.png'
const Navbar = () => {
  return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light py-3">
        <a className="navbar-brand" href="#">
            <img src={elogo} alt="elogo" />
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                <NavLink className="nav-link" to="/Home">Home <span className="sr-only"></span></NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/Signup">Sign up</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/Login">Login</NavLink>
            </li>
            </ul>
        </div>
        </nav>
  )
}
export default Navbar