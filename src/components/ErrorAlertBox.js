import React from 'react'
import * as actionCreators from '../actions'
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

const ErrorAlertBoxComp = (props) => (
    <div className="alert">
        <span className="closebtn" onclick="this.parentElement.style.display='none';">&times;</span>
        This is an alert box.
    </div>
)


const mapStateToProps = (state) => {
    console.log('state.authReducer.loginError', state.authReducer.loginError)
    return {
        username: state.authReducer.username,
        password: state.authReducer.password,
        loginError: state.authReducer.loginError
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(actionCreators, dispatch)
}

const ErrorAlertBox = connect(
    mapStateToProps,
    mapDispatchToProps
)(ErrorAlertBoxComp)

export default ErrorAlertBox





