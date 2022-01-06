import {GET,POST,PUT,DELETE} from "./instance"

// 获取所有老师
export const reqFindAll=()=>GET("/eduservice/teacher/findAll")

// 新增教师
export const insertEduTeacher=(data)=>POST("/eduservice/teacher/findAll",data)

// 上传图片

export const requploadimage=(file,config)=>POST("/eduoss/fileoss",file,config)
// 上传Excel
export const requploadExcel=(file,config)=>POST("/eduservice/subject/excelupload",file,config)

// 获取所有课程
export const reqSubjectList=()=>GET("/eduservice/subject/listsubject")