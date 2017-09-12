import fire from '../firebase/fire.jsx';

export const RECEIVED_TODOS = 'RECEIVED_TODOS'


export function receiveTodos(todos) {
    return {
        type: RECEIVED_TODOS,
        todos: todos
    }
}

export function fetchTodos() {
    return (dispatch) => {
        console.log('fetch todos')
        let todos = []
        let todoRef = fire.database().ref('todo').orderByKey().limitToLast(100)
        todoRef.on('child_added', snapshot => {
            let todo = {text: snapshot.val().text, id: snapshot.key, isFinished: snapshot.val().isFinished}
            todos = [todo].concat(todos)
        })
        console.log('after retrieving', todos)
        dispatch(receiveTodos(todos))
    }
}
