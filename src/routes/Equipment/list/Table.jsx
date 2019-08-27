import React from 'react';
// import Table from 'react-bootstrap/Table';

class CusTable extends React.Component {
  renderHead = () => {
    const { colums } = this.props;
    return colums.map((item, id) => <th key={id}>{item.title}</th>);
  }

  renderBody = () => {
    const { data } = this.props;
    return data.map((item, key) => <tr key={key}>{this.renderTd(item)}</tr>);
  }

  renderCell = (object, item) => {
    return item.render ? item.render(item) : object[item.dataIndex];
  }

  renderTd = (object) => {
    const { colums } = this.props;
    return colums.map((item, id) => <th key={id}>{this.renderCell(object, item)}</th>);
  }

  render() {
    return (
      <Table striped bordered hover>
        <thead>
          <tr>
            {
                this.renderHead()
            }
          </tr>
        </thead>
        <tbody>
          {
            this.renderBody()
          }
        </tbody>
      </Table>
    );
  }
}
CusTable.propTypes = {
// TODO

};

export default CusTable;
