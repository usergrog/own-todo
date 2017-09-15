import {RECEIVED_GROUPS, RECEIVED_TODOS} from "../actions/todoActions";
import {ADD_TODO} from "../actions/todoActions";

export const todoReducer = (state = {}, action) => {
    switch (action.type) {
        case RECEIVED_TODOS:
            return Object.assign({}, state, {todos: action.todos})
        // case ADD_TODO:
        //     return {todos: action.todos}
        case RECEIVED_GROUPS:
            return Object.assign({}, state, {groups: action.groups})
        default:
            return state
    }
}

