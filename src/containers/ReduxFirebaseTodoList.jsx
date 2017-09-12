import {connect} from 'react-redux'
import {fetchTodos} from "../actions/todoActions.jsx";
import {FirebaseTodoList} from "../firebase/FirebaseTotoList.jsx";
import {addTodo} from "../actions/todoActions.jsx";

const mapStateToProps = (state) => {
    console.log('fb todo redux', state)
    console.log('in redux wrapper', state.todoReducer.todos)
    return {
        todos: state.todoReducer.todos
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchTodos: () => {
            dispatch(fetchTodos())
        },
        addTodo: (todo) => {
            dispatch(addTodo(todo))
        }
    }
}

const ReduxFirebaseTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(FirebaseTodoList)

export default ReduxFirebaseTodoList