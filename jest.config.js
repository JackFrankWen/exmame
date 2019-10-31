import React from 'react';
import logo from './logo.svg';
import Table from 'antd/es/table';
import Input from 'antd/es/input';
import Form from 'antd/es/form';
import './App.css';

const data = [];
for (let i = 0; i < 20; i++) {
  data.push({
  });
}
class WrapInput extends React.Component {
  shouldComponentUpdate (nextPros) {
    if(nextPros.value !== this.props.value){
        return true;
    }
    return false;
  }
  render() {
    return <Input {...this.props}/>;
  }
}
class AAA extends React.Component {
  constructor(props) {
    super(props);
    this.columns = [];
    const {form} = this.props;
    const {getFieldDecorator} = form;
    for (let i = 0; i < 20; i++) {
      this.columns.push( {
        title: `name${i}`,
        dataIndex: `name${i}`,
        width: 160,
        render:(a,d,index) => {
          return getFieldDecorator(`name${i}${index}`)(<Input />)
        }, 
      //   render:(a,d,index)=>{
      //    return <Input />
      //  } 
      });
    }

  }


  render() {
    return (
      <Table
          bordered
          dataSource={data}
          columns={this.columns}
          pagination={false}
          scroll={{x: 10000}}
        />
    );
  }
}
const WrappedDynamicRule = Form.create()(AAA);

export default WrappedDynamicRule;
