import React, { Component } from 'react'
import { Modal, Button,Steps  } from 'antd';
import  stepscss from "./step.module.scss"
import { withRouter } from 'react-router-dom';
const { Step } = Steps;
 class AddFirstStep extends Component {
  state={
    visible:false,
    confirmLoading:false,

  }
  // 打开弹出框
    showModal = () => {
        this.setState({
            visible:true 
        })

    };
  // 确定
    handleOk = () => {
        this.setState({
           
            confirmLoading:true
        })
      setTimeout(() => {

        this.setState({
            visible:false ,
            confirmLoading:false
        })
        this.props.firstStepSave()


      }, 2000);
    };
  // 关闭窗口
    handleCancel = () => {
      this.setState({
        visible:false 
    }) 
    };

  render() {
    return (
      <div > 
    <Modal
      title="Title"
      visible={this.state.visible}
      onOk={this.handleOk}
      confirmLoading={this.state.confirmLoading}
      onCancel={this.handleCancel}
      style={{ top: 300 }}
      width={700}
      okText="保存下一本"
      cancelText="取消"
      closable={false}
    >
       <Steps size="small" current={0}>
    <Step title="填写课程基本信息" />
    <Step title="创建课程大纲" />
    <Step title="最终发布" />
  </Steps>
     
    </Modal></div>
    )
  }
}
export default AddFirstStep