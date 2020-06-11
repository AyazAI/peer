import React from 'react';
import Search from '../Search/Search';
import ImageSlider from '../ImageSlider/Imageslider';
import Jumbotron from '../Jumbotron/Jumbotron';
import Welcome from '../Welcome/Welcome';
import ThreeColSec from '../ThreeColSec/ThreeColSec';
import TwoColSec from '../TwoColSec/TwoColSec';





/**
* @author
* @function Homepage
**/

const Homepage = (props) => {
  return(
    <div>
        <Search/>
        <ImageSlider/>
        <Jumbotron/>
        <Welcome/>
        <ThreeColSec/>
        <TwoColSec/>
        
    </div>
   )

 }

export default Homepage;