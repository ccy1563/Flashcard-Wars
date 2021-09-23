import React from 'react';
import { withRouter, Redirect } from 'react-router-dom';


class DeckForm extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      title: '',
      user: this.props.user_id,
      leaderboard: [],
      errors: {}
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.navigateToUserPage = this.navigateToUserPage.bind(this);
  }

  // componentDidMount() {
  //   this.props.fetchUserDecks("6148fcd4300bf698b2d71234");
  //   debugger
  // }

  update(field) {
    return e => this.setState({
        [field]: e.currentTarget.value
    });
  }

  navigateToUserPage() {
    // debugger
    const url = `/user`
    this.props.history.push(url);
  }

  // Handle form submission
  handleSubmit(e) {
    e.preventDefault();

    let deck = {
        title: this.state.title,
        user: this.state.user,
        leaderboard: this.state.leaderboard,
    };
    // debugger
    this.props.composeDeck(deck)
      // .then(() => this.props.history.push("/user"));
    // <Redirect to="/user" />
    window.location.reload(false);
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

  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input className='user-profile-create-deck-text-box' type="text"
                  value={this.state.title}
                  onChange={this.update('title')}
                  placeholder="Title"
              />
              <br />
            <input className='user-profile-create-deck-button' type="submit" value="Create Deck" />
          </div>
        </form>
      </div>
    )
  }

}

export default withRouter(DeckForm);