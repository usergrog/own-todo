import React from 'react'
import {RedditsList} from './RedditsList.jsx'
import {FirebaseTest} from "./FirebaseTest.jsx";

export const Home = (props) => {
    const redditsList = props.reddit.postsBySubreddit[props.reddit.selectedSubreddit]
    return (
        <div>
            <FirebaseTest/>
            <RedditsList redditsList={redditsList}/>
        </div>
    )
}


