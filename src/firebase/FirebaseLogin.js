import React from 'react'
import {Component} from "react/lib/ReactBaseClasses";
import * as actionCreators from '../actions'
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

class FirebaseLoginComp extends Component {
    state = {
        username: '',
        password: '',
        loginError: undefined
    }


    showTempMessage = (msg) => {
        this.setState({loginError: msg})
    //    setTimeout(() => this.setState({loginError: ''}), 2500)
    }


    handleUsernameChange = (event) => {
        this.setState({username: event.target.value});
    }

    handlePasswordChange = (event) => {
        this.setState({password: event.target.value});
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.loginAndRedirect(this.state.username, this.state.password, '/')
    }

    componentWillReceiveProps(nextProps){
        console.log('nextProps', nextProps)
         if (nextProps.loginError) {
             this.showTempMessage(nextProps.loginError)
         }
    }

    render() {
        return (
            <div>
                <form className='loginForm' onSubmit={this.handleSubmit}>
                    <div className='loginField'>
                        <span className='loginLabel'>Username</span>
                        <input className='loginInput' type='text' id='username'
                               onChange={this.handleUsernameChange}/><br/>
                    </div>
                    <div className='loginField'>
                        <span className='loginLabel'>Password</span>
                        <input className='loginInput' type='password' id='password'
                               onChange={this.handlePasswordChange}/>
                    </div>
                    <input className='appButton' type='submit' value='Login'/>
                </form>
            </div>
        )
    }

}

////////////////////////// CONTAINER ////////////////////////////////

const mapStateToProps = (state) => {
    return {
        username: state.authReducer.username,
        password: state.authReducer.password,
        loginError: state.authReducer.loginError
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(actionCreators, dispatch)
}

const FirebaseLogin = connect(
    mapStateToProps,
    mapDispatchToProps
)(FirebaseLoginComp)

export default FirebaseLogin