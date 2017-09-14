import React from 'react';
import './App.scss';
import {Main} from './components/index'
import ReduxHeader from "./containers/ReduxHeader";
import './App.scss';
console.log('start app')

const App = () => (
    <div className="site-wrapper">
        <ReduxHeader/>
        <Main/>
    </div>
)

export default App
