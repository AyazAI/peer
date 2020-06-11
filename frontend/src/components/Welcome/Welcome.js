import React from 'react';
import './Welcome.css';

/**
* @author
* @function Welcome
**/

const Welcome = (props) => {
  return(
    <div className="container-fluid padding">
        <div className="row welcome text-center">
                  <div className="col-12">
                        <h1 className="display-4">Built your setup with ease</h1>                     
                 </div>
                
                  <div className="col-12">
                  <hr/>
                        <h1 className="lead">If you are having skills then find your idea 
                        person and start your setup or if you have an amazing idea then find your desired
                        idea person built your setup!</h1>
                  </div>      
                   
        </div>
        <hr/>
    </div>
   )

 }

export default Welcome;