import {connect} from 'react-redux'
import {TodoItem} from "../components/TodoItem";
import {toggleTodo} from "../actions/todoActions";
import {removeTodo} from "../actions/todoActions";

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