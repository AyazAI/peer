import React , {Component} from 'react';
import Card from './CardUI';
import img1 from '../Cards/london.jpeg';
import img2 from '../Cards/newyork.jpeg';
import img3 from '../Cards/paris.jpeg';


class Cards extends Component {
    render() { 
        return ( 
<div className="container-fluid d-flex justify-content-center">
<div className="row">
<div className="col-md-4">
    <Card imgsrc={img1} title="London"/>
    </div>
<div className="col-md-4"><Card imgsrc={img2} title="Newyork"/></div>
<div className="col-md-4"><Card imgsrc={img3} title="Paris"/></div>
</div>

</div>

         );
    }
}
 
export default Cards;