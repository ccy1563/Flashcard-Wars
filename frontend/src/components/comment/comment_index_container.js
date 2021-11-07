import { connect } from 'react-redux';
import { fetchComment, fetchDeckComments, createComment, updateComment, deleteComment } from '../../actions/comment_actions'
import CommentIndex from './comment_index'

const mapStateToProps = (state, myProps) => {
  // debugger
  return ({
    comments: Object.values(state.entities.comments),
    deckId: myProps.match.params.deckId,
    user_id: state.session.user.id,
    // deckId: myProps.match.params.deckId,
  })
}

const mapDispatchToProps = dispatch => {
  return {
    fetchComment: id => dispatch(fetchComment(id)),
    fetchDeckComments: id => dispatch(fetchDeckComments(id)),
    createComment: comment => dispatch(createComment(comment)),
    updateComment: comment => dispatch(updateComment(comment)),
    deleteComment: id => dispatch(deleteComment(id))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(CommentIndex);