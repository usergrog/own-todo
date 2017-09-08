import {connect} from 'react-redux'
import {logout} from "../actions/index.jsx";
import {Logout} from "../components/Logout.jsx";

const mapStateToProps = (state) => {
    return {}
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLogout: () => {
            dispatch(logout())
        }
    }
}

const ReduxLogout = connect(
    mapStateToProps,
    mapDispatchToProps
)(Logout)

export default ReduxLogout