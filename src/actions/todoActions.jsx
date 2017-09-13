import fire from '../firebase/fire.jsx';

export const RECEIVED_TODOS = 'RECEIVED_TODOS'
export const ADD_TODO = 'ADD_TODO'


export function receiveTodos(todos) {
    return {
        type: RECEIVED_TODOS,
        todos: todos
    }
}

export function addTodo(todo) {
    return (dispatch, getState) => {
        console.log('add todo', todo)
        const uid = getState().authReducer.userId
        console.log('auth uid', getState())
        let todos = getState().todoReducer.todos
        fire.database().ref('todo/' + uid).push(todo)
            .then(t => {
                console.log('after saving', t)
                todo.id = t.key
                todos = [todo].concat(todos)
                dispatch(receiveTodos(todos))
            })
            .catch(error => {
            })// todo implement app error
    }
}


export function toggleTodo(todo) {
    return (dispatch, getState) => {
        todo.isFinished = !todo.isFinished
        console.log('toggle todo', todo)
        const uid = getState().authReducer.userId
        let todos = getState().todoReducer.todos
        fire.database().ref('todo/' + uid + '/' + todo.id).set(todo)
            .then(t => {
                const updatedIndex = todos.findIndex(it => it.id === todo.id)
                const updatedTodos = [...todos.slice(0, updatedIndex), todo, ...todos.slice(updatedIndex + 1)]
                dispatch(receiveTodos(updatedTodos))
            })
            .catch(error => {
            })// todo implement app error
    }
}

export function removeTodo(todo) {
    return (dispatch, getState) => {
        console.log('remove todo', todo)
        const uid = getState().authReducer.userId
        let todos = getState().todoReducer.todos
        fire.database().ref('todo/' + uid + '/' + todo.id).remove()
            .then(t => {
                const updatedIndex = todos.findIndex(it => it.id === todo.id)
                const updatedTodos = [...todos.slice(0, updatedIndex), ...todos.slice(updatedIndex + 1)]
                dispatch(receiveTodos(updatedTodos))
            })
            .catch(error => {
            })// todo implement app error
    }
}


export function fetchTodos() {
    return (dispatch, getState) => {
        console.log('fetch todos')
        let todos = []
        /*
                let todoRef = fire.database().ref('todo').orderByKey().limitToLast(100)
                todoRef.on('child_added', snapshot => {
                    let todo = {text: snapshot.val().text, id: snapshot.key, isFinished: snapshot.val().isFinished}
                    console.log('todo - ', todo)
                    todos = [todo].concat(todos)
                })
        */
        const uid = getState().authReducer.userId
        console.log('uid', getState())
        let todoRef = fire.database().ref('todo/' + uid)
        todoRef.once('value', snapshot => {
            console.log('snapshot', snapshot.val())
            snapshot.forEach(todoSnapshot => {
                console.log('todo - ', todoSnapshot.val())
                let todo = {
                    text: todoSnapshot.val().text,
                    id: todoSnapshot.key,
                    isFinished: todoSnapshot.val().isFinished
                }
                todos = [todo].concat(todos)
            })
            console.log('after retrieving', todos)
            dispatch(receiveTodos(todos))
            // let todo = {text: snapshot.val().text, id: snapshot.key, isFinished: snapshot.val().isFinished}
            // console.log('todo - ', todo)
            // todos = [todo].concat(todos)
        })
    }
}
