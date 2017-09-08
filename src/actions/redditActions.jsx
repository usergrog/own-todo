import fetch from 'isomorphic-fetch'

export const SELECT_SUBREDDIT = 'SELECT_SUBREDDIT'
export const INVALIDATE_SUBREDDIT = 'INVALIDATE_SUBREDDIT'
export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'


export function selectSubreddit(subreddit) {
    return {
        type: SELECT_SUBREDDIT,
        subreddit
    }
}

export function invalidateSubreddit(subreddit) {
    return {
        type: INVALIDATE_SUBREDDIT,
        subreddit
    }
}

export function requestPosts(subreddit) {
    return {
        type: REQUEST_POSTS,
        subreddit
    }
}

export function receivePosts(subreddit, json) {
    return {
        type: RECEIVE_POSTS,
        subreddit,
        posts: json.data.children.map(child => child.data),
        receivedAt: Date.now()
    }
}

export function fetchPosts(subreddit) {

    // Thunk middleware знает, как обращаться с функциями.
    // Он передает метод действия в качестве аргумента функции,
    // т.к. это позволяет отправить действие самостоятельно.

    return function (dispatch) {

        // Первая отправка: состояние приложения обновлено,
        // чтобы сообщить, что запускается вызов API.

        dispatch(requestPosts(subreddit))

        // Функция, вызываемая Thunk middleware, может возвращать значение,
        // которое передается как возвращаемое значение метода dispatch.

        // В этом случае мы возвращаем Promise.
        // Thunk middleware не требует этого, но это удобно для нас.

        return fetch(`http://www.reddit.com/r/${subreddit}.json`)
            .then(response => response.json())
            .then(json =>

                // Мы можем вызывать dispatch много раз!
                // Здесь мы обновляем состояние приложения с результатами вызова API.

                dispatch(receivePosts(subreddit, json))
            )

        // В реальном приложении вы также захотите ловить ошибки сетевых запросов.

    }
}

function shouldFetchPosts(state, subreddit) {
    const posts = state.reddit.postsBySubreddit[subreddit]
    if (!posts) {
        return true
    } else if (posts.isFetching) {
        return false
    } else {
        return posts.didInvalidate
    }
}

export function fetchPostsIfNeeded(subreddit) {

    // Помните, что функция также получает getState(),
    // который позволяет вам выбрать, что отправить дальше.

    // Это полезно для того, чтобы избежать сетевого запроса,
    // если доступно закешированное значение.

    return (dispatch, getState) => {
        if (shouldFetchPosts(getState(), subreddit)) {
            // Обратимся у thunk из thunk!
            return dispatch(fetchPosts(subreddit))
        } else {
            // Дадим вызвавшему коду знать, что ждать нечего.
            return Promise.resolve()
        }
    }
}