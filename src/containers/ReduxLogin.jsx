import {connect} from 'react-redux'
import {Login} from "../components/Login.jsx";
import {loginAndRedirect} from "../actions/index.jsx";

const mapStateToProps = (state) => {
    return {
        username: state.username,
        password: state.password
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLoginClick: (username, password) => {
            dispatch(loginAndRedirect(username, password, '/about'))
        }
    }
}

const ReduxLogin = connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)

export default ReduxLogin