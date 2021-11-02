import React from 'react';
import { Link, withRouter } from 'react-router-dom'
// import './navbar.css'
import '../../stylesheets/navbar.css'

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.logoutUser = this.logoutUser.bind(this);
        this.getLinks = this.getLinks.bind(this);
        this.getProfileLink = this.getProfileLink.bind(this);
        this.navigateToLoginPage = this.navigateToLoginPage.bind(this);
    }

    logoutUser(e) {
        e.preventDefault();
        this.props.logout();
        this.navigateToLoginPage();
    }

    navigateToLoginPage() {
        const url = `/`
        this.props.history.push(url);
    }

    // Selectively render links dependent on whether the user is logged in
    getLinks() {
        if (this.props.loggedIn) {
            return (
                <div className='logged-in-box'>
                    <button className='auth-button' onClick={this.logoutUser}>Logout</button>
                </div>
            );
        } else {
            return (
                <div className='not-logged-in-box'>
                    <button className='auth-button'>
                        <Link className='auth-button-link' to={'/signup'}>Signup</Link>
                    </button>
                    <button className='auth-button'>
                        <Link className='auth-button-link' to={'/login'}>Login</Link>
                    </button>
                </div>
            );
        }
    }

    getProfileLink() {
        if (this.props.loggedIn) {
            return (
                <div>
                    <Link to="/user">
                        <button className='nav-bar-profile-button'>
                            Profile
                        </button>
                    </Link>
                </div>
            )
        }
    }

    render() {
        // debugger
        return (
            <div className="nav-bar-box">
                <div className='nav-bar-left'>
                    <Link to="/">
                        <div className='nav-bar-title'>Slipper</div>
                    </Link>

                    <Link to ='/allDecks'>
                        <div className='nav-bar-profile-button'>Decks</div>
                    </Link>

                    <Link to="/team">
                        <div className='nav-bar-profile-button'>Team</div>
                    </Link>
                    <div className='nav-bar-profile'>{this.getProfileLink()}</div>
                </div>
                <div>{this.getLinks()}</div>
            </div>
        );
    }
}

export default withRouter(NavBar);