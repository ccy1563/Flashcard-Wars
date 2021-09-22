import React from 'react';
import { Link, withRouter } from 'react-router-dom'
// import './navbar.css'
import '../newCss.css';
import '../newCss.css';
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
                <div>
                    <button onClick={this.logoutUser}>Logout</button>
                </div>
            );
        } else {
            return (
                <div>
                    <button>
                        <Link to={'/signup'}>Signup</Link>
                    </button>
                    <button>
                        <Link to={'/login'}>Login</Link>
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
                        <button>
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
            <div>
                <h1>Flashcard Wars</h1>
                <div>{this.getLinks()}</div>
                <div>{this.getProfileLink()}</div>
            </div>
        );
    }
}

export default withRouter(NavBar);