import React from 'react'
import {Route, Switch} from 'react-router-dom'
import {About} from './About'
import ReduxLogout from "../containers/ReduxLogout";
import FirebaseLogin from "../firebase/FirebaseLogin";
import Home from "./Home";


export const Main = () => (
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/about' component={About}/>
        <Route path='/login' component={FirebaseLogin}/>
        <Route path='/logout' component={ReduxLogout}/>
    </Switch>
)

