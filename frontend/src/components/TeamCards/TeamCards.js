import React from 'react';
import team1 from '../data/team1.jfif';
import team2 from '../data/team2.jpg';
import team3 from '../data/team3.jfif';
import "./TeamCard.css";


/**
* @author
* @function TeamCards
**/

const TeamCards = (props) => {
  return(
    <div className="container-fluid padding">
     <div className="row padding">

         <div className="col-md-4">
               <div className="card">
                 <img className="card-img-top" src={team1}/>
                 <div className="card-body">
                 <h4 className="card-title img1">Muhammad Ayaz</h4>
                 <p className="card-text">Ayaz is professional backend coder. People call him coding dianosour.</p>
                 <a href="#" className="btn btn-outline-secondary">See Profile</a>
                 </div>
               </div>
         </div>

         <div className="col-md-4">
               <div className="card">
                 <img className="card-img-top img" src={team2}/>
                 <div className="card-body">
                 <h4 className="card-title">Ali Zaman</h4>
                 <p className="card-text">Ali is professional UI designer. People call him coding dianosour.</p>
                 <a href="#" className="btn btn-outline-secondary">See Profile</a>
                 </div>
               </div>
         </div>
     
         <div className="col-md-4">
               <div className="card">
                 <img className="card-img-top" src={team3}/>
                 <div className="card-body">
                 <h4 className="card-title">Nouman Roy</h4>
                 <p className="card-text">Nouman is professional coder and designer. People call him coding dianosour.</p>
                 <a href="#" className="btn btn-outline-secondary">See Profile</a>
                 </div>
               </div>
         </div>
     </div>
     <br/>
     <hr/>
         </div>
   )

 }

export default TeamCards;