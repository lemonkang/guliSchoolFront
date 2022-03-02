import React, { Component, useReducer } from 'react'
import { Table, Tag, Space, Button } from 'antd';
import { Route,Link,Switch } from 'react-router-dom';
import AddFirstStep from "./AddFirstStep"
export default class Course extends Component {
    constructor(props){
        super(props)
    }
    state={
       name:"kang " 
    }
    history=this.props.history
    columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          render: (text) => <a>{text}</a>,
        },
        {
          title: 'Age',
          dataIndex: 'age',
        },
        {
          title: 'Address',
          dataIndex: 'address',
        },
      ];
    data = [
        {
          key: '1',
          name: 'John Brown',
          age: 32,
          address: 'New York No. 1 Lake Park',
        },
        {
          key: '2',
          name: 'Jim Green',
          age: 42,
          address: 'London No. 1 Lake Park',
        },
        {
          key: '3',
          name: 'Joe Black',
          age: 32,
          address: 'Sidney No. 1 Lake Park',
        },
        {
          key: '4',
          name: 'Disabled User',
          age: 99,
          address: 'Sidney No. 1 Lake Park',
        },
      ]; // rowSelection object indicates the need for row selection
      rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
          console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        },
        getCheckboxProps: (record) => ({
          disabled: record.name === 'Disabled User',
          // Column configuration not to be checked
          name: record.name,
        }),
      };
  render() {
    
    let { path,url } =this.props.match


    return (
        <div>
         
         <div> <Button type='primary'>  <Link to={`${url}/rendering`}>新增课程</Link></Button> </div>
     
              
        <Table
          rowSelection={{
            type: 'checkbox',
            ...this.rowSelection,
          }}
          columns={this.columns}
          dataSource={this.data}
        />
    
                  <Switch>
                   <Route path={`${path}/:topicId`}>
                   <AddFirstStep></AddFirstStep>
                   </Route>
               </Switch>
      </div>
    )
  }
}
