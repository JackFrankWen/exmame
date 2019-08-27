import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';

import { connect } from 'react-redux';
import { getDetail } from 'actions/equipment';

class Detail extends Component {
  componentDidMount() {
      const { match: { params }, dispatch } = this.props;
      if (params.id) {
          dispatch(getDetail(params.id))
      }
  }
  render() {
    const { equipment: { detail }, match: { params },} = this.props;
    return (
        <Container>
          <Jumbotron>
            <Card>
              <Card.Header as="h5">This is Detail</Card.Header>
              <ListGroup variant="flush">
                <ListGroup.Item>Model:    {detail.model} </ListGroup.Item>
                <ListGroup.Item>Brand:    {detail.brand}</ListGroup.Item>
                <ListGroup.Item>Weight:   {detail.weight}</ListGroup.Item>
                <ListGroup.Item>Date:     {detail.manufactureDate} </ListGroup.Item>
              </ListGroup>
              <Card.Body>
                <Card.Link href={`/equipment/edit/${params.id}`}>Edit</Card.Link>
              </Card.Body>
            </Card>
          </Jumbotron>
        </Container>
    );
  }
}


export default connect(( state )=>({ equipment: state.equipment.equipment}))(Detail);
