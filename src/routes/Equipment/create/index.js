import React, { Component } from 'react';
import { Form, Button, Jumbotron } from 'react-bootstrap';

class Create extends Component {
  constructor() {
    super();
  }


  render() {
    return (
      <Jumbotron>

        <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Model</Form.Label>
                <Form.Control type="text" placeholder="Enter Model" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Brand</Form.Label>
                <Form.Control type="text" placeholder="Enter Brand" />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
                <Form.Label>Weight</Form.Label>
                <Form.Control type="text" placeholder="Enter Weight" />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
                <Form.Label>Date</Form.Label>
                <Form.Control type="date" placeholder="Enter v" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
      </Jumbotron>
    );
  }
}


export default Create;
