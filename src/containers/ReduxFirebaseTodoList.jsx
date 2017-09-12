import {connect} from 'react-redux'
import {fetchTodos} from "../actions/todoActions.jsx";
import {FirebaseTodoList} from "../firebase/FirebaseTotoList.jsx";

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
        }
    }
}

const ReduxFirebaseTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(FirebaseTodoList)

export default ReduxFirebaseTodoList