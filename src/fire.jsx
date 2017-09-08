import firebase from 'firebase'

var config = {
    apiKey: "AIzaSyDC5F6xU7NyG9PeI3VhmrfMuHGO8Tj4YMQ",
    authDomain: "own-todo.firebaseapp.com",
    databaseURL: "https://own-todo.firebaseio.com",
    projectId: "own-todo",
    storageBucket: "",
    messagingSenderId: "652074817806"
}

var fire = firebase.initializeApp(config);

export default fire;