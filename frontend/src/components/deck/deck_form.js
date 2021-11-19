import React from 'react';
import { withRouter, Redirect } from 'react-router-dom';


class DeckForm extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      title: '',
      user: this.props.user_id,
      leaderboard: [],
      errors: {},
      flag: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.navigateToUserPage = this.navigateToUserPage.bind(this);
  }

  // componentDidMount() {
  //   this.props.fetchUserDecks("6148fcd4300bf698b2d71234");
  //   debugger
  // }

  handleOpen(e) {
    e.preventDefault();
    this.setState({
      flag: true,
    })
  }

  handleClose(e) {
    e.preventDefault();
    this.setState({
      flag: false,
    })
  }

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

    if (!this.state.flag) {
      return (
        <div className='new-deck-bttn-modal'>
          <button
            onClick={(e) => this.handleOpen(e)}
            className='profile-create-deck-modal'>
            New Deck
          </button>
        </div>
      )
    } else {
      return (
        <div>
          <div className='new-deck-bttn-modal'>
            <button
              onClick={(e) => this.handleOpen(e)}
              className='profile-create-deck-modal'>
              New Deck
            </button>
          </div>
          <div className='modal'>
            <form>
              <div>
                <input className='user-profile-create-deck-text-box'
                  type="text"
                  value={this.state.title}
                  onChange={this.update('title')}
                  placeholder="Title"
                />
                <br />
                {
                  // Only shows submit button when title input box contain characters.
                  this.state.title.length > 0 ?
                    <button
                      className='user-profile-create-deck-button'
                      onClick={this.handleSubmit}>
                      Create Deck
                    </button> : <button
                      className='user-profile-create-deck-button-2'>
                      Create Deck
                    </button>
                }
                <button
                  className='edit-card-close-2'
                  onClick={(e) => this.handleClose(e)}>
                  X
                </button>
              </div>
            </form>
          </div>
        </div>
      )
    }
    }

}

export default withRouter(DeckForm);