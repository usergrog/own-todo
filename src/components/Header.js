import React from 'react'
import {Link} from 'react-router-dom'
import ErrorAlertBox from "./ErrorAlertBox";
import {connect} from 'react-redux'
import * as actionCreators from '../actions'
import {bindActionCreators} from "redux";


export const HeaderComp = (props) => (
    <div className='headerContainer'>
        <header className='header'>
            <nav>
                <Link className="header-link" to='/'>Home</Link>
                {props.username
                    ? <Link className="header-link" to='/logout'>Logout</Link>
                    : <Link className="header-link" to='/login'>Login</Link>}

                <Link className="header-link" to='/about'>About</Link>
                {props.username
                    ? <span>You are logged as {props.username}</span>
                    : <span/>}
            </nav>
        </header>

        {props.appError && <ErrorAlertBox/>}
    </div>
)

const mapStateToProps = (state) => {
    return {
        username: state.authReducer.username,
        password: state.authReducer.password,
        appError: state.alertReducer.appError
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(actionCreators, dispatch)
}

const Header = connect(
    mapStateToProps,
    mapDispatchToProps
)(HeaderComp)

export default Header




