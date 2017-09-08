import React from 'react'
import {RedditsList} from './RedditsList.jsx'

export const Home = (props) => {
    const redditsList = props.reddit.postsBySubreddit[props.reddit.selectedSubreddit]
    return (
        <RedditsList redditsList={redditsList}/>
    )
}


