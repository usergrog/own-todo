import {connect} from 'react-redux'
import {Home} from "../components/Home.jsx";

const mapStateToProps = (state) => {
    return {
        redditReducer: state.redditReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {}
}

const ReduxHome = connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)

export default ReduxHome