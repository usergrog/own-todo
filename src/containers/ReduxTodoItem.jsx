import {connect} from 'react-redux'
import {TodoItem} from "../components/TodoItem.jsx";
import {toggleTodo} from "../actions/todoActions.jsx";
import {removeTodo} from "../actions/todoActions.jsx";

const mapStateToProps = (state) => {
    return {
        todos: state.todoReducer.todos
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleTodo: (todo) => {
            dispatch(toggleTodo(todo))
        },
        removeTodo: (todo) => {
            dispatch(removeTodo(todo))
        }
    }
}

const ReduxTodoItem = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoItem)

export default ReduxTodoItem