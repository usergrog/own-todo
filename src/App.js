import React from 'react';
import './App.scss';
import {Main} from './components/index.jsx'
import ReduxHeader from "./containers/ReduxHeader.jsx";
import './App.scss';
console.log('start app')

const App = () => (
    <div className="site-wrapper">
        <ReduxHeader/>
        <span>oops</span>
        <Main/>
    </div>
)

export default App
