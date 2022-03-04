import React, { Component } from 'react'
import { Table, Tag, Space, Button } from 'antd';
import { Route,Link } from 'react-router-dom';
import AddFirstStep from "./AddFirstStep"
import AddSecondStep from './AddSecondStep';
import AddThirdStep from './AddThirdStep';
export default class Course extends Component {
    constructor(props){
        super(props)
        this.firstStepChild=React.createRef()
        this.secondStepChild=React.createRef()
        this.thirdStepChild=React.createRef()
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
      // 新增课程
      addfirststep=()=>{
        
        this.firstStepChild.current.showModal()
        
      }
      // 第一步的保存
      firstStepSave=()=>{

        // 打开第二步的弹出框
        this.secondStepChild.current.showModal()
      }
      // 第二步的保存
      secondStepSave=()=>{
        this.thirdStepChild.current.showModal()
      }
      //第二步的上一步
      secondStepPrevious=()=>{
        // 打开第一步
        this.firstStepChild.current.showModal()
      }
      //第三步的上一步
      thirdStepPrevious=()=>{
        // 打开第二步
        this.secondStepChild.current.showModal()
      }
  render() {
    let { path } =this.props.match
  

    return (
        <div>
         <div> <Button type='primary' onClick={this.addfirststep}>  新增课程</Button> </div>  
        <Table
          rowSelection={{
            type: 'checkbox',
            ...this.rowSelection,
          }}
          columns={this.columns}
          dataSource={this.data}
        />   
          <AddFirstStep ref={this.firstStepChild} firstStepSave={this.firstStepSave}></AddFirstStep>
          <AddSecondStep ref={this.secondStepChild} secondStepSave={this.secondStepSave} secondStepPrevious={this.secondStepPrevious}></AddSecondStep>
          <AddThirdStep  ref={this.thirdStepChild} thirdStepChild={this.thirdStepPrevious}></AddThirdStep>
      
      </div>
    )
  }
}
