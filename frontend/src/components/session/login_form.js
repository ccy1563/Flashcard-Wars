import React from 'react';
import { withRouter } from 'react-router-dom';
import '../../stylesheets/login.css';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            errors: {}
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
        this.navigateToSplashPage = this.navigateToSplashPage.bind(this);
    }

    // Once the user has been authenticated, redirect to the Tweets page
    componentWillReceiveProps(nextProps) {
        if (nextProps.currentUser === true) {
            this.props.history.push('/splash');
        }

        // Set or clear errors
        this.setState({ errors: nextProps.errors })
    }

    // componentDidMount() {
    //     debugger
    // }

    // Handle field updates (called in the render method)
    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    // Handle form submission
    handleSubmit(e) {
        e.preventDefault();

        let user = {
            email: this.state.email,
            password: this.state.password
        };
        this.props.login(user);
        this.navigateToSplashPage();
    }

    // Render the session errors if there are any
    renderErrors() {
        return (
            <ul>
                {Object.keys(this.state.errors).map((error, i) => (
                    <li key={`error-${i}`}>
                        {this.state.errors[error]}
                    </li>
                ))}
            </ul>
        );
    }

    navigateToSplashPage() {
        // debugger
        const url = `/splash`
        this.props.history.push(url);
    }


    render() {
        return (
            <div className='login-form-box'>
                <form className='login-form' onSubmit={this.handleSubmit}>
                    <div className='login-form-content'>
                        <input 
                            className='login-email-credentials'
                            type="text"
                            value={this.state.email}
                            onChange={this.update('email')}
                            placeholder="Email"
                        />
                        <br />
                        <input
                            className='login-password-credentials'
                            type="password"
                            value={this.state.password}
                            onChange={this.update('password')}
                            placeholder="Password"
                        />
                        <br />
                        <input className='login-button' type="submit" value="Submit" />
                        {this.renderErrors()}
                    </div>
                </form>
            </div>
        );
    }
}

export default withRouter(LoginForm);