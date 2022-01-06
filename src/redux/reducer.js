import {combineReducers} from 'redux'
import { GetAllTeacher,GetAllSubject } from './action-types';

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
// 课程模块
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
export default combineReducers({
    Teacher,Subject
})