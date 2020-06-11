import React from 'react';
import img5 from '../data/desk.png';

/**
* @author
* @function TwoColSec
**/;

const TwoColSec = (props) => {
  return(
    <div className="container-fluid padding">
     <div className="row padding">
    <div className="col-lg-6">
      <h2>If you use it..</h2>
      <p>One of the best things and biggest advantages of being an entrepreneur is you can work from home, work from the office (if you have one), 
        and work from virtually any destination with a great view and a glass of wine in your hand!</p>
        <p>One of the best things and biggest advantages of being an entrepreneur is you can work from home, work from the office (if you have one), 
        and work from virtually any destination with a great view and a glass of wine in your hand!</p>
        <p>One of the best things and biggest advantages of being an entrepreneur is you can work from home, work from the office (if you have one), 
        and work from virtually any destination with a great view and a glass of wine in your hand!</p>
<a href="#" className="btn btn-primary">Learn More..</a>
<br/>
    </div>
    
    <div className="col-lg-6">
         <br/>
         <img className="img-fluid" src={img5}/>  
         </div>
</div>   
<hr className="my-4"/>
</div>
   );

 }   

export default TwoColSec;