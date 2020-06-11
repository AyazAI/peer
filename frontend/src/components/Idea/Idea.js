import React, { Component } from 'react'
import { Jumbotron, Button } from 'react-bootstrap';

export default class Idea extends Component {
    render() {
        return (
            <div>
                <Jumbotron>
                <h1>Your Ideas Here</h1>
                <p>
                    You may list your Ideas here
                    ...

  </p>
  <p>
    <Button variant="primary">Learn more</Button>
  </p>
</Jumbotron>
            </div>
        )
    }
}
