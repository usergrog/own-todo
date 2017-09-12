import React from 'react'
import {Route, Switch} from 'react-router-dom'
import {About} from './About.jsx'
import ReduxLogout from "../containers/ReduxLogout.jsx";
import ReduxHome from "../containers/ReduxHome.jsx";
import ReduxFirebaseLogin from "../containers/ReduxFirebaseLogin.jsx";

export const Main = () => (
    <Switch>
        <Route exact path='/' component={ReduxHome}/>
        <Route path='/about' component={About}/>
        <Route path='/login' component={ReduxFirebaseLogin}/>
        <Route path='/logout' component={ReduxLogout}/>
    </Switch>
)

