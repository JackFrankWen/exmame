import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container'
import { connect } from 'react-redux';
import { ActionTypes } from 'constants/index';

// import { submitData } from 'actions/index';

class Create extends Component {
  constructor() {
    super();
  }

  handleSubmit = handleSubmit => {
    event.preventDefault();
    const { formModal, formBrand, formWeight, formDate } = event.target.elements;
    const { dispatch } = this.props;
    const postData = {
        modal: formModal.value,
        brand: formBrand.value,
        weight: formWeight.value,
        date: formDate.value,
    };
    dispatch({
        type: ActionTypes.EQUIPMENT_CREATE,
        payload: postData
    })
}

render() {
    return (
        <Container>

            <Jumbotron>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="formModal">
                        <Form.Label>Model</Form.Label>
                        <Form.Control type="text" placeholder="Enter Model" />
                    </Form.Group>

                    <Form.Group controlId="formBrand">
                        <Form.Label>Brand</Form.Label>
                        <Form.Control type="text" placeholder="Enter Brand" />
                    </Form.Group>
                    <Form.Group controlId="formWeight">
                        <Form.Label>Weight</Form.Label>
                        <Form.Control type="text" placeholder="Enter Weight" />
                    </Form.Group>
                    <Form.Group controlId="formDate">
                        <Form.Label>Date</Form.Label>
                        <Form.Control type="date" placeholder="Enter v" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Jumbotron>
        </Container>
    );
  }
}

function mapStateToProps(state) {
    return state;
  }
export default connect(mapStateToProps)(Create);