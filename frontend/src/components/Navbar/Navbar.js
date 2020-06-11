import React from 'react';
import './Navbar.scss';
import logo from '../../data/logo.png';
/**
* @author
* @function Navbar
**/

const Navbar = (props) => {
  return(
    <nav className="navbar">
     <img className="img-circle" src={logo} alt="peer"/>
     <ul className="nav-links">
         <li>
             <a href="" className="nav-link">
                 home
             </a>
         </li>
         <li>
             <a href="" className="nav-link">
                 about
             </a>
         </li>
         <li>
             <a href="" className="nav-link active">
                 Ideas
             </a>
         </li>
     </ul>
    </nav>
   )

 }

export default Navbar;