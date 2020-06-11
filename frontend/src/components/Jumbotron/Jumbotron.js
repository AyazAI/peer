import React from 'react';

/**
* @author
* @function Jumbotron
**/

const Jumbotron = (props) => {
  return(
    <div className="container-fluid">
        <div className="row jumbotron">
             <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9 col-xl-10">
                <p className="lead"> Concept of Entrepreneurship. Entrepreneurship is the ability
                 and readiness to develop,organize and run a business enterprise along with any of its uncertainties 
                in order to make a profit. </p>
             </div>
             <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-2">
                 <a href="#"><button type="button" className="btn btn-outline-secondary btn-lg">Get Started</button></a>
             </div>
        </div>
    </div>
   );

 }

export default Jumbotron;