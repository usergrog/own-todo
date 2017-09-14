import {connect} from 'react-redux'
import {fetchTodos} from "../actions/todoActions";
import {FirebaseTodoList} from "../firebase/FirebaseTotoList";
import {addTodo} from "../actions/todoActions";

const mapStateToProps = (state) => {
    console.log('fb todo redux', state)
    console.log('in redux wrapper', state.todoReducer.todos)
    return {
        todos: state.todoReducer.todos,
        userId: state.authReducer.userId
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