import React from 'react'
import { useRef } from 'react'
import { useState } from 'react'

import { Upload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
const ExcelUpload = (props) => {
    const propsexcel = {
        action: '//jsonplaceholder.typicode.com/posts/',
        listType: 'picture',
        previewFile(file) {
          console.log('Your upload file:', file);
          // Your process logic. Here we just mock to the same file
          return fetch('https://next.json-generator.com/api/json/get/4ytyBoLK8', {
            method: 'POST',
            body: file,
          })
            .then(res => res.json())
            .then(({ thumbnail }) => thumbnail);
        },
      };
      
    return (
        <div>
     <Upload {...propsexcel}>
    <Button icon={<UploadOutlined />}>Upload</Button>
  </Upload>
        </div>
    )
}
export default ExcelUpload