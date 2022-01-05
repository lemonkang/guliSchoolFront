import React, { Component } from 'react'
import ImageUpload from "./ImageUpload"
import ExcelUpload from "./ExcelUpload"
import uploadStyle from "./upload.module.scss"
import { Button,message } from 'antd'
import axios from 'axios'
import { GET } from '../../api/instance'
export default class UploadCompon extends Component {
    constructor(props){
        super(props)
       
    }
   
    render() {
        return (
            <div className={uploadStyle.body}>
                <div className={uploadStyle.header}>      
                <ExcelUpload  />
                
               <a href="http://guli-file-inno.oss-cn-beijing.aliyuncs.com/subject.xlsx">获取Excel模板</a>
                </div>
        
            </div>
        )
    }
}
