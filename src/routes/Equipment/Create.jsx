import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Alert from 'react-bootstrap/Alert';
import { Prompt } from 'react-router'

import { connect } from 'react-redux';
import { ActionTypes } from 'constants/index';

class Create extends Component {
  
  componentDidMount() {
    const { match: { params }, dispatch } = this.props;
    if (params.id) {
        console.log(params.id, 'id')
        dispatch({
            type: ActionTypes.EQUIPMENT_DETAIL,
            payload: params.id,
        })
    }
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
        });
    }


    render() {
        const { equipment: { detail, message, st }} = this.props;
        return (
            <Container>
                  <Prompt
                    when={true}
                        message={location => `Are you sure you want to go to ${location.pathname}`}
                    />
                <Jumbotron>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group controlId="formModal">
                            <Form.Label>Model</Form.Label>
                            <Form.Control 
                                type="text" 
                                placeholder="Enter Model"
                                defaultValue={detail.model}
                            />
                        </Form.Group>

                        <Form.Group controlId="formBrand">
                            <Form.Label>Brand</Form.Label>
                            <Form.Control 
                                type="text" 
                                placeholder="Enter Brand" 
                                defaultValue={detail.brand}
                                
                            />
                        </Form.Group>
                        <Form.Group controlId="formWeight">
                            <Form.Label>Weight</Form.Label>
                            <Form.Control 
                                type="text" 
                                placeholder="Enter Weight"
                                defaultValue={detail.weight}
                            />
                        </Form.Group>
                        <Form.Group controlId="formDate">
                            <Form.Label>Date</Form.Label>
                            <Form.Control 
                                type="date" 
                                defaultValue={detail.manufactureDate}
                                placeholder="Enter Date" 
                            />
                        </Form.Group>
                        <a href="/equipment/list" style={{marginRight: '8px'}}>
                            <Button  variant="outline-primary">
                                Back
                            </Button>
                        </a>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Jumbotron>
                {
                    message &&
                    <Alert  variant={status !== 200 ? 'primary' : 'danger'}>
                        {message}
                    </Alert>
                }
            </Container>
        );
    }
}

export default connect(( state )=>({ equipment: state.equipment.equipment}))(Create);