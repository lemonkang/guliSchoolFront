import { useDispatch } from "react-redux";
import { getAllCourseInfoApi } from "../api/course";
import { reqFindAll, reqSubjectList } from "../api/teacher";
import { GetAllSubject, GetAllTeacher,GetAllCourseInfo} from "./action-types";



// 获取所有教师action
const getAllTeacherAction=(teachers)=>({type:GetAllTeacher,data:teachers})
//获取所有课程分类
const getAllSubjectActions=(subjects)=>({type:GetAllSubject,data:subjects})
// 获取所有的课程信息
const getAllCourseInfoAction=(courseinfos)=>({type:GetAllCourseInfo,data:courseinfos})

// 获取所有教师
export const getAllTeacher=()=>{
  
    return async dispatch=>{
     const response= await reqFindAll()

     dispatch(getAllTeacherAction(response))

    }
}
// 获取所有课程分类
export const getAllSubject= ()=>{
 
 return async dispatch=>{
    const response=  await reqSubjectList()
    const data=response.data.data.AllSubjectList
     dispatch(getAllSubjectActions(data))
 }
}
// 获取所有的课程信息
export const getAllCourseInfo=()=>{
    return async dispatch=>{
      const data= await getAllCourseInfoApi()
    
      dispatch(getAllCourseInfoAction(data.data.data.EduCourseInfolist))}
}