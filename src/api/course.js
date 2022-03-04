import {GET,POST,DELETE,PUT} from "./instance"
// 获取所有的课程信息
export  const getAllCourseInfoApi=()=>GET("/eduservice/course/getAllCourseInfo")