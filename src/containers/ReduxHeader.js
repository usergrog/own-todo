import {connect} from 'react-redux'
import {Header} from "../components/Header";

// import {toggleTodo} from '../actions'
// import TodoList from '../components/TodoList'

// const getVisibleTodos = (todos, filter) => {
//     switch (filter) {
//         case 'SHOW_ALL':
//             return todos
//         case 'SHOW_COMPLETED':
//             return todos.filter(t => t.completed)
//
//         case 'SHOW_ACTIVE':
//             return todos.filter(t => !t.completed)
//     }
// }

const mapStateToProps = (state) => {
    return {
        username: state.authReducer.username,
        password: state.authReducer.password
    }
}

const mapDispatchToProps = (dispatch) => {
    return {}
}

const ReduxHeader = connect(
    mapStateToProps,
    mapDispatchToProps
)(Header)

export default ReduxHeader