import firebase from 'firebase'
import {store} from "../store";
import {successLogin} from "../actions/authActions";
import {fetchGroups, fetchTodos} from "../actions/todoActions";
import {push} from 'react-router-redux'

const config = {
    apiKey: "AIzaSyDC5F6xU7NyG9PeI3VhmrfMuHGO8Tj4YMQ",
    authDomain: "own-todo.firebaseapp.com",
    databaseURL: "https://own-todo.firebaseio.com",
    projectId: "own-todo",
    storageBucket: "",
    messagingSenderId: "652074817806"
};

const fire = firebase.initializeApp(config)

fire.auth().onAuthStateChanged((user) => {
    if (user) {
        console.log('currentUser', user)
        store.dispatch(successLogin(user.email, '', user.uid))
        store.dispatch(push('/'));
        store.dispatch(fetchGroups())
    } else {
        console.log('currentUser is empty')
    }
})


export default fire;