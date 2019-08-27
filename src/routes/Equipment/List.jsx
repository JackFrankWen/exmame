import React from 'react';
import Table from './Table';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { ActionTypes } from 'constants/index';
import { connect } from 'react-redux';


const colums = [
  {
    title: '#',
    dataIndex: 'id',
    render: (data) => {
        return (
          <div>
            <a href={`/equipment/detail/${data.id}`}>{data.id}</a>
          </div>
        );
      },
    
  },
  {
    title: 'Model',
    dataIndex: 'model',
  },
  {
    title: 'Brand',
    dataIndex: 'brand',
  },
  {
    title: 'ManufactureDate',
    dataIndex: 'manufactureDate',
  },
  {
    title: 'operation',
    dataIndex: 'manufactureDate',
    render: (data) => {
      return (
        <div>
          <a href={`/equipment/detail/${data.id}`}>edit</a>
        </div>
      );
    },
  },
];

class ListPage extends React.Component {
    componentDidMount() {
        const { dispatch } = this.props;
        dispatch({
            type: ActionTypes.EQUIPMENT_LIST,
        })
    }
    render(){
        const { equipment: { list } } = this.props;
        return (
          <Container>
              <Jumbotron>
              <h1>Hello, there!</h1>
              <p>
                  This is a simple equipment list page.
              </p>
              <p>
                  <a href="/equipment/create"><Button variant="primary">New</Button></a>
              </p>
              <Table colums={colums} data={list} />
              </Jumbotron>
          </Container>
        );
    }
}
export default connect(( state )=>({ equipment: state.equipment.equipment}))(ListPage);

