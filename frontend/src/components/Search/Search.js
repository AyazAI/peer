import React from 'react';
import './Search.css';

/**
* @author
* @function Search
**/

const Search = (props) => {
  return(
    <div className="row">
        <div className="col-md-12">
            <h5 className="text-center welcome animated bounceInDown">Welcome To</h5>
            <h1 className="text-center tamil animated bounceInUp bg-danger" id="entrepreneur-arena">Entrepreneur Arena</h1>
            <div className="row">
                <div className="col-md-12 col-xl-8 offset-xl-2">
                    <p className="text-center discription animated bounceInLeft lead" >I didn't choose entrepreneurship, but it choosed me !</p>
                    <div className="row">
                        <div className="col-md-12 col-xl-10 offset-xl-1">
                            <p className="text-center details animated bounceInRight lead" >If you are wiling to be an Entrepreneur but you need a partner or you can't find a valuable idea or a well-know skill then you are on the right orbit</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


   )

 }

export default Search;