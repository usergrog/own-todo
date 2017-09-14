import React from 'react'
import {Component} from "react/lib/ReactBaseClasses";
import Redirect from "react-router-dom/es/Redirect";

export class Logout extends Component{
    componentWillMount(){
        this.props.onLogout()
    }

    render() {
        return (
            <Redirect to='/login'/>
        )
    }
}


