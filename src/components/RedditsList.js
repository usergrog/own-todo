import React from 'react'

export const RedditsList = (props) => {
    const renderUiList = () => (
        <ul>
            {props.redditsList.items.map(it =>
                <li key={it.id}>{it.title}</li>
            )}
        </ul>
    )

    return (
        props.redditsList.isFetching
            ? <h1>feetching</h1>
            : renderUiList()
    )
}


