import React, { Component } from 'react'
import ImageUpload from "./ImageUpload"
import ExcelUpload from "./ExcelUpload"
import uploadStyle from "./upload.module.scss"
import { Button,message,TreeSelect  } from 'antd'
import axios from 'axios'
import { GET } from '../../api/instance'
import { connect } from 'react-redux'
import {getAllSubject}from "../../redux/actions"


 class UploadCompon extends Component {
     
    constructor(props){
        super(props) 
        this.state={
            value: undefined,
        }

    }
    componentDidMount(){
        this.props.getAllSubject()
        console.log('====================================');
        console.log("测试回退");
        console.log('====================================');
    }
    treeData=()=>{
        // 所有课程
      const allsubjects=  this.props.Subject.allsubjects
   const data=   allsubjects.map((item,index)=>{
       let subjectchild=item.children.map((itemchild,indexchild)=>({ 
           title: itemchild.title,
          value: itemchild.title+indexchild}))
       let subject={
        title: item.title,
        value: item.title+index,
        children:subjectchild   
      }
      return subject
      })

      
          return data
    }
    onChange = value => {
        console.log(value);
        this.setState({ value });
      };
    render() {
        return (
            <div className={uploadStyle.upload}>
                <div className={uploadStyle.header}>      
                <ExcelUpload  />   
               <a href="http://guli-file-inno.oss-cn-beijing.aliyuncs.com/subject.xlsx">获取Excel模板</a>
                </div>
                <div className={uploadStyle.body}>
                <TreeSelect
        style={{ width: '100%' }}
        value={this.state.value}
        dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
        treeData={this.treeData()}
        placeholder="Please select"
        treeDefaultExpandAll
        onChange={this.onChange}
      />
                </div>

        
            </div>
        )
    }
}
export default connect(state=>({Subject:state.Subject}),{getAllSubject})(UploadCompon)
