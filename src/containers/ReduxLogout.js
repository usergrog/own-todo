import {connect} from 'react-redux'
import {signOut} from "../actions/index";
import {Logout} from "../components/Logout";

const mapStateToProps = (state) => {
    return {}
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLogout: () => {
            dispatch(signOut())
        }
    }
}

const ReduxLogout = connect(
    mapStateToProps,
    mapDispatchToProps
)(Logout)

export default ReduxLogout