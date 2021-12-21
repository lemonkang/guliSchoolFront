import {GET,POST,PUT,DELETE} from "./instance"

// 获取所有老师
export const reqFindAll=()=>GET("/eduservice/teacher/findAll")

// 新增教师
export const insertEduTeacher=(data)=>POST("/eduservice/teacher/findAll",data)