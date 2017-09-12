import {connect} from 'react-redux'
import {loginAndRedirect} from "../actions/index.jsx";
import {FirebaseLogin} from "../firebase/FirebaseLogin.jsx";

const mapStateToProps = (state) => {
    return {
        username: state.username,
        password: state.password,
        loginError: state.loginError
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