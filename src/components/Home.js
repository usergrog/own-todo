import React from 'react'
import {connect} from 'react-redux'
import FirebaseTodoList from "../firebase/FirebaseTotoList";
import GroupsList from "../firebase/GroupsList";

const HomeComp = (props) => {


    console.log('main', props.todoReducer.selectedGroup)
    return (
        <div>
            {props.todoReducer.selectedGroup && <GroupsList/>}
            {!props.todoReducer.selectedGroup && <h1>load group</h1>}
            {props.todoReducer.selectedGroup && <FirebaseTodoList/>}
            {!props.authReducer.userId && <h1>Please log in</h1>}
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        authReducer: state.authReducer,
        todoReducer: state.todoReducer,
    }
}

const mapDispatchToProps = (dispatch) => {
    // todo refactor
    // import * as actionCreators from '../actions/authActions'
    // return bindActionCreators(actionCreators, dispatch)

    return {}
}

const Home = connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeComp)

export default Home