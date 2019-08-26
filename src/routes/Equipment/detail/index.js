import React, { Component } from 'react';
import { Card, Button, Jumbotron } from 'react-bootstrap';

class Detail extends Component {
  render() {
    return (
      <Jumbotron>

        <Card>
          <Card.Header as="h5">Featured</Card.Header>
          <Card.Body>
            <Card.Title>Special title treatment</Card.Title>
            <Card.Text>
              Detail info.
            </Card.Text>
            <Button variant="primary">Click to edit</Button>
          </Card.Body>
        </Card>
      </Jumbotron>
    );
  }
}


export default Detail;
