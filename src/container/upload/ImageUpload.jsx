import React from 'react'
import { Upload, message, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { requploadimage } from '../../api/teacher';
const ImageUpload = () => {
    const props = {
        name: 'file',
        action: 'http://localhost:9001/eduoss/fileoss',
       async onChange(info) {
          if (info.file.status !== 'uploading') {


          }
          if (info.file.status === 'done') {
              console.log(info);
           
     
          } else if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
          }
        },
      };
      const  upload=async (e)=>{
        const file = document.getElementById('file').files[0]
        const formData = new FormData();
        formData.append("file",file)
      
          let config = {
            headers:{'Content-Type': 'multipart/form-data'}
                       }
      const data=await requploadimage(formData,config)
        console.log(data);
      }
    return (
        <div>
     <input type="file" onChange={upload} id='file'/>
        </div>
    )
}
export default ImageUpload