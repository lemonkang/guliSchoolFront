import {combineReducers} from 'redux'
import { GetAllTeacher,GetAllSubject,GetAllCourseInfo } from './action-types';

// 教师模块
const initTeacher={
    allteacher:[]
}

const Teacher=(state=initTeacher,action)=>{
switch (action.type) {
    case GetAllTeacher:
        
    return {...state,allteacher:action.data}

    default:
      return state
}
}
// 课程分类模块
const initSubject={
    allsubjects:[]
}
const Subject=(state=initSubject,action)=>{
    switch (action.type) {
        case GetAllSubject:
            
          return  {...state,allsubjects:action.data}
    
        default:
           return state
    }
}
// 课程信息模块
const initCourse={
    allcourse:[]
}
const Course=(state=initCourse,action)=>{

    switch (action.type) {
        case GetAllCourseInfo:
    
            
            return {...state,allcourse:action.data}
    
        default:
            return state
    }
}
export default combineReducers({
    Teacher,Subject,Course
})