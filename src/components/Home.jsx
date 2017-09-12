import React from 'react'
import ReduxFirebaseTodoList from "../containers/ReduxFirebaseTodoList.jsx";

export const Home = (props) => {
    console.log('home',props)
    const redditsList = props.redditReducer.postsBySubreddit[props.redditReducer.selectedSubreddit]
    return (
        <div>
            {/*<RedditsList redditsList={redditsList}/>*/}
            <ReduxFirebaseTodoList/>
        </div>
    )
}


