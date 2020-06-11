import React, { Component } from 'react';
import './static/css/App.css';
import InitializeChatComponent from './components/InitializeChatComponent';
import ChatComponent from './components/ChatComponent';
import WebSocketInstance from './WebSocket';
import ReactSearchBox from 'react-search-box';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import BSTable from './components/BSTable';

// 
//import Navbar from './components/Navbar/Navbar';
import Idea from './components/Idea/Idea';
import Navbar1 from './components/Navbar1/navbar';
import Footer from './components/Footer/Footer';
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Contactus from './components/Contactus/Contactus';
import AboutUs from './components/AboutUs/AboutUs';
import Homepage from './components/Homepage/Homepage';
import Chat from "./components/Chat/Chat";
import 'bootstrap/dist/css/bootstrap.min.css';

// import RectangleComponent from './Components/GroupComponent';
// import GroupComponent from './Components/GroupComponent';

class App extends Component{

	render(){
		return (

			<BrowserRouter>
			<div>
			  <Navbar1 />
			  <Switch>
			  <Route path="/" exact component={Homepage} />
			  <Route path="/register" component={Signup }/>
			  <Route path="/chat" component={Chat} />
			  <Route path="/login"component={Login} />
			  <Route path="/Contactus"component={Contactus} />
			  <Route path="/AboutUs"component={AboutUs} />
			  <Route path="/Ideas" component={Idea} />
			  </Switch>
			  </div>
			  <Footer/>
			  </BrowserRouter>
		);
	}
	
}

export default App;