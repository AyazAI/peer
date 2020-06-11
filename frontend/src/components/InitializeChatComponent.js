import React, { Component } from "../../node_modules/react";

import {
	Navbar,
	Nav,
	NavDropdown,
	Form,
	FormControl,
	Button,
	Container
} from '../../node_modules/react-bootstrap';

class InitializeChatComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username : ''
        }
    }

    usernameChangeHandler = (event) => {
        this.setState({
            username : event.target.value
        });
    }
    
    render() {
        return (
            <div className="login">
                <Form onSubmit={(e) => this.props.handleLogin(e, this.state.username)} className="form">
                    <Form.Control 
                    type="text"
                    onChange={this.usernameChangeHandler}
                    value={this.state.username}
                    placeholder="Chat ID"
                    required />
                    <br />
                    <Button type="submit">
                        Let's Chat!
                    </Button>
                </Form>
            </div>
        );
    }
}

export default InitializeChatComponent;