import React from 'react';
import img5 from '../data/bootstrap2.png';
/**
* @author
* @function OurPhilosphy
**/

const OurPhilosphy = (props) => {
  return(
    <div className="container-fluid padding">
     <div className="row padding">
    <div className="col-lg-6">
      <h2>Our Philosphy</h2>
      <p>Entrepreneurship is viewed by economists to be a combination of innovation and risk taking.
           When such activity thrives, high growth rates are achieved as well as opportunities offered to all of society, including the poor. They offer benefits through growth and employment. In Pakistan, innovation and risk taking is severely inhibited by the intrusive role of government of country. From the starting days of strategy, when protection and subsidy policies determine winners in the market, entrepreneurship has been diverted to government favours. Government’s economic policy is also seeking to promote growth through a basically ‘mercantilist’ approach where local commerce through serious neglect is regulated. This sector either employees most of the poor or offers them entrepreneurial 
          opportunities although deregulating this sector could be a priority in and anti-poor planning.</p>
        
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
   )

 }

export default OurPhilosphy;