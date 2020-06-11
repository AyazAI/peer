import React, {Component} from 'react';
import './Login.css';
import {Link} from 'react-router-dom';

/**
* @author
* @function Login
**/

class Login extends Component {
state ={
   credentials: {username: '' ,  password: ''}
}

login = event => {
  console.log(this.state.credentials);
  fetch('http://127.0.0.1:8000/auth/',
  {
method: 'POST',
headers: {'Content-Type': 'application/json'}, body: JSON.stringify(this.state.credentials)})
.then(data => data.json())
.then(
  data => 
  {console.log(data.token);
  } ).catch( error => console.error(error))
}
inputChanged = event => {
  const cred = this.state.credentials;
  cred[event.target.name] = event.target.value;
  this.setState({credentials:cred});
}

  render() {
    return(
      <section className="container-fluid bg">
        <section className="row justify-content-center">
          <section className="col-12 col-sm-6 col-md-3">
          <form className="form-container">
      <div className="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={this.state.credentials.username} onChange={this.inputChanged}/>
        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>
      <div className="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input type="password" className="form-control" id="exampleInputPassword1" value={this.state.credentials.password} onChange={this.inputChanged}/>
      </div>
      <div className="form-group form-check">
        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
        <label className="form-check-label" for="exampleCheck1">Remember me?</label>
      </div>
      <button type="submit" className="btn btn-primary btn-block" onClick={this.login}>Login</button>
      <label for="exampleInputPassword1">Dont have an account?</label>
      <button type="submit" className="btn btn-success btn-block"><Link to="/register"style={{color: "white" , textDecoration: "none"}}>Register</Link></button>
      </form>
          </section> 
        </section>
      </section>
     );
    }
    }    
     
  
  



export default Login;