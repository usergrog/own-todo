import React from 'react'
import FirebaseTodoList from "../firebase/FirebaseTotoList";


export const Home = (props) => {
    console.log('home',props)
    return (
        <div>
            {props.authReducer.userId && <FirebaseTodoList/>}
            {!props.authReducer.userId && <h1>Please log in</h1>}
        </div>
    )
}


