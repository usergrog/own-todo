import React from 'react'
import * as actionCreators from '../actions'
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

const ErrorAlertBoxComp = (props) => (
    <div className="alert">
        <span className="close-btn" onClick={props.hideError}>&times;</span>
        This is an alert box.
    </div>
)


////////////////////////// CONTAINER ////////////////////////////////
const mapStateToProps = (state) => {
    return {
//        appError: state.alertReducer.appError
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





