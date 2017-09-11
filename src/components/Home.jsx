import React from 'react'
import {RedditsList} from './RedditsList.jsx'
import {FirebaseTest} from "./FirebaseTest.jsx";

export const Home = (props) => {
    console.log('home',props)
    const redditsList = props.redditReducer.postsBySubreddit[props.redditReducer.selectedSubreddit]
    return (
        <div>
            <FirebaseTest/>
            <RedditsList redditsList={redditsList}/>
        </div>
    )
}


