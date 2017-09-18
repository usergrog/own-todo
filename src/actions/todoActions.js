import fire from '../firebase/fire';
import {hideProgress, showProgress} from "./alertActions";

export const RECEIVED_TODOS = 'RECEIVED_TODOS'
export const RECEIVED_GROUPS = 'RECEIVED_GROUPS'
export const ADD_TODO = 'ADD_TODO'
export const SELECT_GROUP = 'SELECT_GROUP'


export function receiveTodos(todos) {
    return {
        type: RECEIVED_TODOS,
        todos: todos
    }
}

export function selectGroup(group) {
    return {
        type: SELECT_GROUP,
        selectedGroup: group
    }
}

export function receiveGroups(groups) {
    return {
        type: RECEIVED_GROUPS,
        groups: groups
    }
}

export function addTodo(todo) {
    return (dispatch, getState) => {
        dispatch(showProgress())
        const uid = getState().authReducer.userId
        const selectedGroup = getState().todoReducer.selectedGroup
        let todos = getState().todoReducer.todos
        todo['groupId'] = selectedGroup.id
        todo['uid'] = uid
        console.log('add todo', todo)
        fire.database().ref('todos').push(todo)
            .then(t => {
                todo.id = t.key
                todos = [todo].concat(todos)
                dispatch(receiveTodos(todos))
            })
            .catch(error => {
                console.error(error)
            })// todo implement app error
    }
}

function checkAndSelectGroup(dispatch, groups, group) {
    let gr = undefined
    if (!group && groups && groups.length > 0 ) {
        gr = groups[0]
    } else {
        gr = group
    }
    dispatch(selectGroupAndFetchTodos(gr))
}

export function addGroup(group) {
    return (dispatch, getState) => {
        dispatch(showProgress())
        const uid = getState().authReducer.userId
        let groups = getState().todoReducer.groups
        fire.database().ref('groups').push(group)
            .then(t => {
                group.id = t.key
                groups = [group].concat(groups)
                checkAndSelectGroup(dispatch, groups, group)
                dispatch(receiveGroups(groups))
            })
            .catch(error => {
                console.error(error)
            })// todo implement app error
    }
}

export function toggleTodo(todo) {
    return (dispatch, getState) => {
        todo.isFinished = !todo.isFinished
        dispatch(showProgress())
        const uid = getState().authReducer.userId
        let todos = getState().todoReducer.todos
        fire.database().ref('todos/' + todo.id).set(todo)
            .then(t => {
                const updatedIndex = todos.findIndex(it => it.id === todo.id)
                const updatedTodos = [...todos.slice(0, updatedIndex), todo, ...todos.slice(updatedIndex + 1)]
                dispatch(receiveTodos(updatedTodos))
            })
            .catch(error => {
                console.error(error)
            })// todo implement app error
    }
}

export function shareGroup(group) {
    return (dispatch, getState) => {
        group.isShared = !group.isShared
        console.log(group.isShared)
        dispatch(showProgress())
        const uid = getState().authReducer.userId
        let groups = getState().todoReducer.groups
        fire.database().ref('groups/' + group.id).set(group)
            .then(t => {
                const updatedIndex = groups.findIndex(it => it.id === group.id)
                const updatedGroups = [...groups.slice(0, updatedIndex), group, ...groups.slice(updatedIndex + 1)]
                dispatch(receiveGroups(updatedGroups))
            })
            .catch(error => {
                console.error(error)
            })// todo implement app error
    }
}

export function removeTodo(todo) {
    return (dispatch, getState) => {
        dispatch(showProgress())
        const uid = getState().authReducer.userId
        let todos = getState().todoReducer.todos
        fire.database().ref('todos/' + todo.id).remove()
            .then(t => {
                const updatedIndex = todos.findIndex(it => it.id === todo.id)
                const updatedTodos = [...todos.slice(0, updatedIndex), ...todos.slice(updatedIndex + 1)]
                dispatch(receiveTodos(updatedTodos))
            })
            .catch(error => {
                console.error(error)
            })// todo implement app error
    }
}

export function removeGroup(group) {
    return (dispatch, getState) => {
        dispatch(showProgress())
        const uid = getState().authReducer.userId
        let groups = getState().todoReducer.groups

        // todo need refactoring
        let todos = getState().todoReducer.todos
        todos.map(todo => {
            fire.database().ref('todos/' + todo.id).remove()
                // .then(t => {
                //     const updatedIndex = todos.findIndex(it => it.id === todo.id)
                //     const updatedTodos = [...todos.slice(0, updatedIndex), ...todos.slice(updatedIndex + 1)]
                //     dispatch(receiveTodos(updatedTodos))
                // })
                .catch(error => {
                    console.error(error)
                })// todo implement app error
        })

        fire.database().ref('groups/' + group.id).remove()
            .then(t => {
                const updatedIndex = groups.findIndex(it => it.id === group.id)
                const updatedGroups = [...groups.slice(0, updatedIndex), ...groups.slice(updatedIndex + 1)]
                dispatch(receiveGroups(updatedGroups))
            })
            .catch(error => {
                console.error(error)
            })// todo implement app error
    }
}


export function fetchTodos() {
    return (dispatch, getState) => {
        const selectedGroup = getState().todoReducer.selectedGroup
        if (selectedGroup) {
            let todos = []
            const uid = getState().authReducer.userId
            dispatch(showProgress())
            console.log('fetchTodos uid', uid)
            let todoRef = fire.database().ref('todos')
                .orderByChild("uid").equalTo(uid)
            todoRef.once('value', snapshot => {
                snapshot.forEach(todoSnapshot => {
                    if (todoSnapshot.val().groupId === selectedGroup.id) {
                        let todo = {
                            text: todoSnapshot.val().text,
                            id: todoSnapshot.key,
                            isFinished: todoSnapshot.val().isFinished
                        }
                        todos = [todo].concat(todos)
                    }
                })
                dispatch(receiveTodos(todos))
                // let todo = {text: snapshot.val().text, id: snapshot.key, isFinished: snapshot.val().isFinished}
                // console.log('todo - ', todo)
                // todos = [todo].concat(todos)
            })
        }
    }
}


export function fetchGroups() {
    return (dispatch, getState) => {
        let groups = []
        const uid = getState().authReducer.userId
        dispatch(showProgress())
        console.log('uid1', uid)
        let groupsRef = fire.database().ref('groups').orderByChild("uid").equalTo(uid)
        console.log('ref', groupsRef)
        groupsRef.once('value', snapshot => {
            snapshot.forEach(groupSnapshot => {
                let group = {
                    text: groupSnapshot.val().text,
                    id: groupSnapshot.key,
                    uid: groupSnapshot.val().uid,
                    isShared: groupSnapshot.val().isShared
                }
                groups = [group].concat(groups)
            })
            checkAndSelectGroup(dispatch, groups, undefined)
            dispatch(receiveGroups(groups))
        })
    }
}

export function selectGroupAndFetchTodos(group) {
    return (dispatch, getState) => {
        dispatch(selectGroup(group))
        dispatch(fetchTodos())
    }
}
