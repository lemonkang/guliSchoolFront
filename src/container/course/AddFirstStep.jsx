import React, { Component } from 'react'
import { Modal, Button } from 'antd';
import  stepscss from "./step.module.scss"
export default  class AddFirstStep extends Component {
  state={
    visible:false,
    confirmLoading:false,
    modalText:'Content of the modal'
  }
    showModal = () => {
        this.setState({
            visible:true 
        })

    };
    handleOk = () => {
        this.setState({
            modalText:'The modal will be closed after two seconds',
            confirmLoading:true
        })

     
      setTimeout(() => {
        this.setState({
            visible:false ,
            confirmLoading:false
        })

      }, 2000);
    };
  
    handleCancel = () => {
      console.log('Clicked cancel button');
 
    };
  


  render() {
    console.log("组件架子啊");
    return (
      <div className={stepscss}>  <Button type="primary" onClick={this.showModal}>
      Open Modal with async logic
    </Button>
    <Modal
      title="Title"
      visible={this.state.visible}
      onOk={this.handleOk}
      confirmLoading={this.state.confirmLoading}
      onCancel={this.handleCancel}
    >
      <p>{this.state.modalText}</p>
    </Modal></div>
    )
  }
}
