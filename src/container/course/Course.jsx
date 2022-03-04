import React, { Component } from 'react'
import { Table, Tag, Space, Button } from 'antd';
import { Route,Link } from 'react-router-dom';
import AddFirstStep from "./AddFirstStep"
import AddSecondStep from './AddSecondStep';
import AddThirdStep from './AddThirdStep';
import { connect } from 'react-redux';
import {getAllCourseInfo} from "../../redux/actions"
class Course extends Component {
    constructor(props){
        super(props)
        this.firstStepChild=React.createRef()
        this.secondStepChild=React.createRef()
        this.thirdStepChild=React.createRef()
    }

    state={
       name:"kang " 
    }
    // 第一次渲染完成执行
    componentDidMount(){
      this.props.getAllCourseInfo()
      
    
    }
    
    
    history=this.props.history
    columns = [
        {
          title: 'title',
          dataIndex: 'title',
          render: (text) => <a>{text}</a>,
        },
        {
          title: 'subjectParentId',
          dataIndex: 'subjectParentId',
        },
        {
          title: 'subjectId',
          dataIndex: 'subjectId',
        },
        {
          title: 'teacherId',
          dataIndex: 'teacherId',
        },
        {
          title: 'status',
          dataIndex: 'status',
        },
        {
          title: 'buyCount',
          dataIndex: 'buyCount',
        },
        {
          title: 'price',
          dataIndex: 'price',
        },
        {
          title: 'description',
          dataIndex: 'description',
        },
   
      ];
    data =this.props.Course.allcourse.map((item,index)=>({
      key: index,
      title: item.title,
      subjectParentId: item.subjectParentId,
      subjectId: item.subjectId,
      teacherId: item.teacherId,
      status: item.status,
      buyCount: item.buyCount,
      price: item.price,
      description: item.description
    }))  // rowSelection object indicates the need for row selection
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
    console.log( this.props.Course.allcourse);

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

export default connect((state)=>({Course:state.Course}),{getAllCourseInfo})(Course)