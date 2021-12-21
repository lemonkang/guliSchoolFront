import {combineReducers} from 'redux'
import { GetAllTeacher } from './action-types';

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
export default combineReducers({
    Teacher
})