import React, {Component} from 'react';
import './Signup.css';
import {Link} from 'react-router-dom';

/**
* @author
* @function Login
**/

class Signup extends Component {
  render() {
    return(
      <section className="container-fluid bg1">
        <section className="row justify-content-center">
          <section className="col-12 col-sm-6 col-md-3">
          <form className="form-container1">
          <div class="form-group">
    <label for="exampleFormControlInput1">First Name</label>
    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Ayaz"/>
  </div>
  <div class="form-group">
    <label for="exampleFormControlInput1">Last Name</label>
    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Khan"/>
  </div>
  <div class="form-group">
    <label for="exampleFormControlSelect1">Gender</label>
    <select class="form-control" id="exampleFormControlSelect1">
      <option>Male</option>
      <option>Female</option>
      <option>Other</option>
    </select>
  </div>
  <div class="form-group">
    <label for="exampleFormControlSelect1">Are you an idea or skill person?</label>
    <select class="form-control" id="exampleFormControlSelect1">
    <option>Choose one...</option>
      <option>Idea Person</option>
      <option>Skill Person</option>
    </select>
  </div>
  <div class="form-group">
    <label for="exampleFormControlTextarea1">Description</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
  <div class="form-group">
    <label for="exampleFormControlFile1">Select image..</label>
    <input type="file" class="form-control-file" id="exampleFormControlFile1"/>
  </div>
      <div className="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>
      <div className="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input type="password" className="form-control" id="exampleInputPassword1"/>
      </div>
      
      <div className="form-group form-check">
        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
        <label className="form-check-label" for="exampleCheck1">Remember me?</label>
      </div>
      <button type="submit" className="btn btn-primary btn-block"><Link to="/login"style={{color: "white" , textDecoration: "none"}}>Login</Link></button>
      <button type="submit" className="btn btn-success btn-block">Register</button>
      <p id="privacyTerms" class="small_text font-size">
                By signing up, you agree to our <a href="#">terms of use</a>,<a href="#">privacy policy</a>, <a
                  href="#">and cookie policy</a>.
              </p>

      </form>
      
          </section> 
        </section>
      </section>
     );
    }
    }    
     
  
  



export default Signup;