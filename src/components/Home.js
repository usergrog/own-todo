import React from 'react'
import ReduxFirebaseTodoList from "../containers/ReduxFirebaseTodoList";

export const Home = (props) => {
    console.log('home',props)
    return (
        <div>
            {props.authReducer.userId && <ReduxFirebaseTodoList/>}
            {!props.authReducer.userId && <h1>Please log in</h1>}
        </div>
    )
}


