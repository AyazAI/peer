import React from 'react';
import './Footer.css';

/**
* @author
* @function Footer
**/

const Footer = (props) => {
  return(
      <div className="footer">
    <footer>
        <div className="container-fluid padding">
        <div className="row text-center">
            <div className="col-md-4">
                 <img src=""/>
                 <hr className="light"/>
                 <p>0900-78601</p>
                 <p>email@email.com</p>
                 <p>Street Name Pims House #07</p>
                 <p>City, State 4400</p>                
            </div>
            <div className="col-md-4">
            <hr className="light"/>
            <h5>Our Hours</h5>
            <hr className="light"/>
            <p>Monday: 9am</p>
            <p>Saturday: 4am</p>
            <p>Sunday: Closed</p>
            </div>

            <div className="col-md-4">
            <hr className="light"/>
            <h5>Service Area</h5>
            <hr className="light"/>
            <p>Monday: 9am</p>
            <p>Saturday: 4am</p>
            <p>Sunday: Closed</p>
            <p>Sunday: Closed</p>
            </div>
            <div className="col-12">
              <hr className="light"/>
            <h5> &copy; Peer.com </h5>
            </div>
            </div>
        </div>
    </footer>
    </div>
   )

 }

export default Footer;