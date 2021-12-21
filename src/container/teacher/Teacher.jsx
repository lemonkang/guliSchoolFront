

import { getAllTeacher } from '../../redux/actions'

import React, { Component } from 'react'
import { connect } from 'react-redux'

 class Teacher extends Component {
     constructor(props){
         super(props)

     }

    componentDidMount(){
        this.props.getAllTeacher()
    }
    render() {
        return (
            <div>
                教师模块
                {}
            </div>
        )
    }
}
export default connect(state=>({Teacher:state.Teacher}),{getAllTeacher})(Teacher)
