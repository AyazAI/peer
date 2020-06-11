import React from 'react';
import TeamCards from '../TeamCards/TeamCards';

/**
* @author
* @function Team
**/

const Team = (props) => {
  return(
<div className="container-fluid padding">
    <div className="row welcome text-center">
           <div className="col-12">
                 <h1 className="display-4">Meet The Team</h1>
                 <hr/>  
           </div>
         
           
      </div>
      <TeamCards/>
</div>
   )

 }

export default Team;