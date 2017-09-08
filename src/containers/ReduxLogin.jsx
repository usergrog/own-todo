import {connect} from 'react-redux'
import {Login} from "../components/Login.jsx";
import {login} from "../actions/index.jsx";

const mapStateToProps = (state) => {
    return {
        username: state.username,
        password: state.password
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLoginClick: (username, password) => {
            dispatch(login(username, password))
        }
    }
}

const ReduxLogin = connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)

export default ReduxLogin