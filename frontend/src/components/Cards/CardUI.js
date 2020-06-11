import React from 'react';
import './card.css';

/**
* @author
* @function Card
**/

const Card = (props) => {
    return(
        <div className="card text-center">
            <div className="overflow">
                  <img src={props.imgsrc} alt="img 1" className="card-img-top"/>
            </div>
            <div className="card-body text-dark">
    <h4 className="card-title">{props.title}</h4>
              <p className="card-text text-secondary">
                Hi my name is ali Hi my name is ali Hi my name is ali Hi my name is ali Hi my name is ali
                Hi my name is aliHi my name is ali Hi my name is ali
              </p>
                  <a href="#" className="btn btn-outline-success" alt="">Go anywhere</a>
            </div>
        </div>
       );
    

 }

export default Card;