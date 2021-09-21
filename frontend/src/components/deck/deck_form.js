import React from 'react';
import { withRouter } from 'react-router-dom';


class DeckForm extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      title: '',
      user: this.props.user_id,
      errors: {}
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
        [field]: e.currentTarget.value
    });
  }

  // Handle form submission
  handleSubmit(e) {
    e.preventDefault();

    let deck = {
        title: this.state.title,
        user: this.state.user
    };
    this.props.composeDeck(deck);
    // debugger
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
              <input type="text"
                  value={this.state.title}
                  onChange={this.update('title')}
                  placeholder="Title"
              />
              <br />
              <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    )
  }

}

export default withRouter(DeckForm);