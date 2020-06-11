import React from 'react';
import './Imageslider.css';
import Carousel from 'react-bootstrap/Carousel';
import img2 from '../data/fear.jpg';
import img3 from '../data/background.png';
import img4 from '../data/background3.png';


/**
* @author
* @function ImageSlider
**/

const ImageSlider = (props) => {
  return(
    <Carousel>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={img2}
        alt="img3"
      />
      <Carousel.Caption>
        <h3 className="display-2">Peer</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={img3}
        alt="Third slide"
      />
  
      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={img4}
        alt="Third slide"
      />
  
      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
   );

 }

export default ImageSlider;