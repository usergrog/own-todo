import React from 'react'
import {Route, Switch} from 'react-router-dom'
import {About} from './About'
import ReduxLogout from "../containers/ReduxLogout";
import ReduxHome from "../containers/ReduxHome";
import ReduxFirebaseLogin from "../containers/ReduxFirebaseLogin";

export const Main = () => (
    <Switch>
        <Route exact path='/' component={ReduxHome}/>
        <Route path='/about' component={About}/>
        <Route path='/login' component={ReduxFirebaseLogin}/>
        <Route path='/logout' component={ReduxLogout}/>
    </Switch>
)

