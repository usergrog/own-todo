import React from 'react'
import {Component} from "react/lib/ReactBaseClasses";
import Redirect from "react-router-dom/es/Redirect";
import {connect} from 'react-redux'
import {bindActionCreators} from "redux";
import * as actionCreators from '../actions'

export class LogoutComp extends Component {
    componentWillMount() {
        this.props.signOut()
    }

    render() {
        return (
            <Redirect to='/login'/>
        )
    }
}


const mapStateToProps = (state) => {
    return {}
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(actionCreators, dispatch)
}

const Logout = connect(
    mapStateToProps,
    mapDispatchToProps
)(LogoutComp)

export default Logout