import React from 'react'
import {connect} from 'react-redux'
import FirebaseTodoList from "../firebase/FirebaseTotoList";

const HomeComp = (props) => {
    console.log('home',props)
    return (
        <div>
            {props.authReducer.userId && <FirebaseTodoList/>}
            {!props.authReducer.userId && <h1>Please log in</h1>}
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        authReducer: state.authReducer,
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