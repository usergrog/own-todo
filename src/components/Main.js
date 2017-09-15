import React from 'react'
import {Route, Switch} from 'react-router-dom'
import {About} from './About'
import FirebaseLogin from "../firebase/FirebaseLogin";
import Home from "./Home";
import Logout from "./Logout";


export const Main = () => (
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/about' component={About}/>
        <Route path='/login' component={FirebaseLogin}/>
        <Route path='/logout' component={Logout}/>
    </Switch>
)

