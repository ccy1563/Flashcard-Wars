import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            handle: '',
            password: '',
            password2: '',
            errors: {}
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.clearedErrors = false;
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.signedIn === true) {
            this.props.history.push('/login');
        }

        this.setState({ errors: nextProps.errors })
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        let user = {
            email: this.state.email,
            handle: this.state.handle,
            password: this.state.password,
            password2: this.state.password2
        };

        this.props.signup(user, this.props.history);
    }

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

    render() {
        return (
            <div className="signup-form-container">
                <div className ="login">
                    <form onSubmit={this.handleSubmit} className="form-box">
                        <p className="form-header">Sign up for Flashcard War</p>
                        <div className = "session-form-errors">
                            {this.renderErrors()}
                        </div>

                            <br />
                            <input type="text"
                                value={this.state.email}
                                onChange={this.update('email')}
                                placeholder="Email"
                                className="signup-input"
                            />
                            <br />
                            <input type="text"
                                value={this.state.handle}
                                onChange={this.update('handle')}
                                placeholder="Handle"
                                className="signup-input"
                            />
                            <br />
                            <input type="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                                placeholder="Password"
                                className="signup-input"
                            />
                            <br />
                            <input type="password"
                                value={this.state.password2}
                                onChange={this.update('password2')}
                                placeholder="Confirm Password"
                                className="signup-input"
                            />
                            <br />

                            <div className="button-input">
                                <input className="session-submit" type="submit" value="Submit" />
                            </div>
                            <div>
                                <p className="session-redirect">
                                    Already a Flashcard War member? <Link to="/login">Log in here.</Link>
                                </p>
                            </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default withRouter(SignupForm);