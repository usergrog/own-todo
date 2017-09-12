import {connect} from 'react-redux'
import {loginAndRedirect} from "../actions/index.jsx";
import {FirebaseLogin} from "../firebase/FirebaseLogin.jsx";

const mapStateToProps = (state) => {
    console.log('state.authReducer.loginError', state.authReducer.loginError)
    return {
        username: state.authReducer.username,
        password: state.authReducer.password,
        loginError: state.authReducer.loginError
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLoginClick: (username, password) => {
            dispatch(loginAndRedirect(username, password, '/'))
        }
    }
}

const ReduxFirebaseLogin = connect(
    mapStateToProps,
    mapDispatchToProps
)(FirebaseLogin)

export default ReduxFirebaseLogin