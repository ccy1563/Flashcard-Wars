import React from 'react';
import { withRouter } from 'react-router-dom';
import '../../stylesheets/comment_form.css'

class CommentForm extends React.Component{

  constructor(props){
    super(props);
    this.state ={
      text: '',
      user: this.props.user_id,
      deck: this.props.deckId,
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
    let comment = {
      user: this.state.user,
      text: this.state.text,
      deck: this.state.deck,
    };
    // console.log(comment)
    this.props.createComment(comment);
    window.location.reload(false);
  }
  
  render(){
    let commentSubmit;
    if(this.props.user_id){
      commentSubmit = (
        <div className="comment-form">
        <form onSubmit={this.handleSubmit}>
          <textarea
            placeholder="enter text here..."
            cols="58"
            rows="4"
            value={this.state.text}
            onChange={this.update("text")}
            className="comment-form-text-area"
          />
          <input type="submit" value="Comment"  className="comment-form-submit"/>
        </form>
      </div>
      )
    }

    return(
      <div>
        {commentSubmit}
      </div>
    )
  }
}

export default withRouter(CommentForm);