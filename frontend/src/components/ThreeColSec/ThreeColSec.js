import React from 'react';
import './ThreeColSec.css';

/**
* @author
* @function ThreeColSec
**/

const ThreeColSec = (props) => {
  return(
    <div className="container-fluid padding">
<div className="row text-center padding">
<div className="col-xs-12 col-sm-6 col-md-4">
    <i className="fab fa-react"></i>
    <h3>REACT JS</h3>
    <p>React is an open-source JavaScript library for building user interfaces.</p>
</div>

<div className="col-xs-12 col-sm-6 col-md-4">
    <i className="fas fa-bold"></i>
    <h3>BOOTSTRAP</h3>
    <p>Build with the latest version of bootstrap.</p>
</div>

<div className="col-sm-12 col-md-4">
    <i className="fab fa-css3"></i>
    <h3>CSS3</h3>
    <p>Cascading Style Sheets is a style sheet language used for describing
     the presentation of a document written in a markup language like HTML.</p>
</div>
</div>
<hr className="my-4"/>
</div>
   );

 }

export default ThreeColSec;