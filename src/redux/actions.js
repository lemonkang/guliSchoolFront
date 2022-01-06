import { useDispatch } from "react-redux";
import { reqFindAll, reqSubjectList } from "../api/teacher";
import { GetAllSubject, GetAllTeacher } from "./action-types";



// 获取所有教师action
const getAllTeacherAction=(teachers)=>({type:GetAllTeacher,data:teachers})
//获取所有课程
const getAllSubjectActions=(subjects)=>({type:GetAllSubject,data:subjects})
// 获取所有教师
export const getAllTeacher=()=>{
  
    return async dispatch=>{
     const response= await reqFindAll()

     dispatch(getAllTeacherAction(response))

    }
}
// 获取所有课程信息
export const getAllSubject= ()=>{

 return async dispatch=>{
    const response=  await reqSubjectList()
    const data=response.data.data.AllSubjectList
     dispatch(getAllSubjectActions(data))
 }
}