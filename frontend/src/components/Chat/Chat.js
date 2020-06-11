import React, { Component } from 'react'
import InitializeChatComponent from '../InitializeChatComponent';
import ChatComponent from '../ChatComponent';
import WebSocketInstance from '../../WebSocket';
import ReactSearchBox from 'react-search-box';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import BSTable from '../BSTable';
import {Container} from "react-bootstrap";



export default class Chat extends Component {
    constructor(props) {
		super(props)
		
		this.state = {
			username : '',
			loggedIn : false
		};

	}
	
    handleLogin = (e, username) => {
		e.preventDefault();
		this.setState({loggedIn : true, username : username});
		WebSocketInstance.connect();
		console.log(this.state);
	}

    data = [
		{
		  key: 'john',
		  value: 'John Doe',
		},
		{
		  key: 'jane',
		  value: 'Jane Doe',
		},
		{
		  key: 'mary',
		  value: 'Mary Phillips',
		},
		{
		  key: 'robert',
		  value: 'Robert',
		},
		{
		  key: 'karius',
		  value: 'Karius',
		},
      ]
      
    render() {
		const { username,loggedIn } = this.state;

        return (
            <div>
                {
					
					loggedIn ?
					<Container>
					{/* <GroupComponent /> */}
					<ChatComponent 
					currentUser={username}
					/>
					</Container>
					:
					
					<Container>
					<BSTable />
					<InitializeChatComponent 
					handleLogin = {this.handleLogin}
					/>
					</Container>
				   }
            </div>
        )
    }
}
