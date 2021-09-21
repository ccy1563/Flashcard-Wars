import React from 'react';
import { withRouter } from 'react-router-dom';


class CommentForm extends React.Component{

  constructor(props){
    super(props);
    this.state ={
      text: '',
      user: this.props.user_id,
      deck: this.props.deckId,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.navigateToUserPage = this.navigateToUserPage.bind(this);
  }

  update(field) {
    return e => this.setState({
        [field]: e.currentTarget.value
    });
  }

  // Handle form submission
  handleSubmit(e) {
    e.preventDefault();

    let comment = {
        user: this.state.user,
        text: this.state.text,
        deck: this.state.deck,
    };
    this.props.createComment(comment);
    this.navigateToUserPage();
  }
  
  navigateToUserPage() {
    // debugger
    const url = `/user`
    this.props.history.push(url);
}
  
  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <textarea
            placeholder="enter text here..."
            cols="65"
            rows="4"
            value={this.state.text}
            onChange={this.update("text")}
          />
          <input type="submit" value="Add comment" />
        </form>
      </div>
    )
  }
}

export default withRouter(CommentForm);