import React from 'react'
import * as actionCreators from '../actions'
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

const ProgressBoxComp = (props) => (
    <div className="spinner">
        <div className="rect1"/>
        <div className="rect2"/>
        <div className="rect3"/>
        <div className="rect4"/>
        <div className="rect5"/>
    </div>
)

////////////////////////// CONTAINER ////////////////////////////////
const mapStateToProps = (state) => {
    return {
    }
}


const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(actionCreators, dispatch)
}

const ProgressBox = connect(
    mapStateToProps,
    mapDispatchToProps
)(ProgressBoxComp)

export default ProgressBox





