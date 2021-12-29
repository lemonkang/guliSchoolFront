import React, { Component } from 'react'
import ImageUpload from "./ImageUpload"
import ExcelUpload from "./ExcelUpload"
export default class UploadCompon extends Component {
    constructor(props){
        super(props)
        
    }
    render() {
        return (
            <div>
                <h3>文件上传</h3>
                <ImageUpload />
                <ExcelUpload/>
            </div>
        )
    }
}
