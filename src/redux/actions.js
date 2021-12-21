import { useDispatch } from "react-redux";
import { reqFindAll } from "../api/teacher";
import { GetAllTeacher } from "./action-types";



// 获取所有教师action
const getAllTeacherAction=(teachers)=>({type:GetAllTeacher,data:teachers})
// 获取所有教师
export const getAllTeacher=()=>{
  
    return async dispatch=>{
     const response= await reqFindAll()
     debugger
     dispatch(getAllTeacherAction(response))

    }
}
