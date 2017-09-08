import React from 'react'
import {Component} from "react/lib/ReactBaseClasses";

export class Login extends Component {
    state = {
        username: '',
        password: ''
    }

    handleUsernameChange = (event) => {
        this.setState({username: event.target.value});
    }

    handlePasswordChange = (event) => {
        this.setState({password: event.target.value});
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.onLoginClick(this.state.username, this.state.password)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className='loginField'>
                    <span>Username</span>
                    <input type='text' id='username'
                           onChange={this.handleUsernameChange}/><br/>
                </div>
                <div>
                    <span>Password</span>
                    <input type='password' id='password'
                           onChange={this.handlePasswordChange}/>
                </div>
                <input type='submit' value='Login'/>
            </form>
        )
    }
}


