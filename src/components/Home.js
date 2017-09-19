import React from 'react'
import {connect} from 'react-redux'
import FirebaseTodoList from "../firebase/FirebaseTotoList";
import GroupsList from "../firebase/GroupsList";

const HomeComp = (props) => {
    return (
        <div>
            {<GroupsList/>}
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
    return {}
}

const Home = connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeComp)

export default Home