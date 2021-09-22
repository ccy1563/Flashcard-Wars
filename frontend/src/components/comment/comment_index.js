import React from 'react';
import { withRouter } from 'react-router-dom';
import CommentIndexItem from './comment_index_item';
class Comment extends React.Component {
  constructor(props){
    super(props);
    this.state={
      commentArray: []
    }
  }

  componentDidMount() {
    this.props.fetchDeckComments(this.props.deckId)
      .then( res => {
        this.setState({
          commentArray: Object.values(res.comments.data)
        })
      })
  }

  render(){
    const { commentArray } = this.state;
    const { fetchComment, fetchDeckComments, createComment, updateComment, deleteComment, user_id, deckId} = this.props
    const allCommentsInDeck = commentArray.map(comment => {
      return(
        <CommentIndexItem 
          comment = {comment}
          fetchDeckComments = {fetchDeckComments}
          createComment = {createComment}
          updateComment = {updateComment}
          deleteComment = {deleteComment}
          fetchComment = {fetchComment}
          user_id = {user_id}
          key={comment._id}
          deckId = {deckId}
        />
      )
    });

    return(
      <div>
        { allCommentsInDeck }
      </div>
    )
  }
}

export default withRouter(Comment);