import React from 'react';
import './App.scss';
import {Main} from './components/index'
import './App.scss';
import Header from "./components/Header";

console.log('start app')

const App = () => (
    <div className="site-wrapper">
        <Header/>
        <Main/>
    </div>
)

export default App
