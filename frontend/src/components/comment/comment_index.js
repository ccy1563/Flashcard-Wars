import React from 'react';
import { withRouter } from 'react-router-dom';

class Comment extends React.Component {
  componentDidMount() {
    this.props.fetchDeckComments(this.props.deck._id)
  }

  render(){
    const { comments, user_id, fetchDeckComments, createComment, updateComment, deleteComment} = this.props
    return(
      <div>
        
      </div>
    )
  }
}

export default withRouter(Comment);