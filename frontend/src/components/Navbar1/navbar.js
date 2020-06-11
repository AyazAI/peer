import React from 'react';
import img1 from '../data/logo.jpg';
import './navbar.css';
import {NavLink} from 'react-router-dom';

/**
* @author
* @function Navbar1
**/

const Navbar1 = (props) => {
  return(
<nav className="navbar navbar-expand-md navbar-light bg-danger sticky-top">
<div className="container-fluid">
    <a className="navbar-brand" href="#"> <img src={img1} className="img1"/></a>
<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
<span className="navbar-toggler-icon"></span>
</button>
<div className="collapse navbar-collapse" id="navbarResponsive">
    <ul className="navbar-nav ml-auto">
         <li className="nav-item">
         <NavLink to="/" className="main-nav font-weight-bold" activeClassName="main-nav-active">Home </NavLink>
         </li>
         <li className="nav-item">
         <NavLink to="/chat" className="main-nav font-weight-bold" activeClassName="main-nav-active">Chat </NavLink>
         </li>
         <li className="nav-item">
         <NavLink to="/Ideas" className="font-weight-bold main-nav" activeClassName="main-nav-active">Ideas </NavLink>
         </li>
         <li className="nav-item">
         <NavLink to="/aboutus" className="main-nav font-weight-bold" activeClassName="main-nav-active">About Us </NavLink>
         </li>
         <li className="nav-item">
         <NavLink to="/login" className="font-weight-bold main-nav" activeClassName="main-nav-active">Login </NavLink>
         </li>
         <li className="nav-item">
         <NavLink to="/register" className="font-weight-bold main-nav" activeClassName="main-nav-active">Register </NavLink>
         </li>
         <li className="nav-item">
             <NavLink to="/contactus" className="font-weight-bold main-nav" activeClassName="main-nav-active">Contact Us </NavLink>
            
         </li>
    </ul>
</div>
</div>
</nav>
   );
 }
export default Navbar1;