import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import '../newCss.css';
import NavBar from './navbar';

const mapStateToProps = state => {
    // debugger;
    return {
        loggedIn: state.session.isAuthenticated
    }
}

export default connect(
    mapStateToProps,
    { logout }
)(NavBar);