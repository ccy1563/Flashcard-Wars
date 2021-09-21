import { connect } from 'react-redux';
import {
  fetchComments,
  fetchComment,
  fetchDeckComments,
  createComment,
  updateComment,
  deleteComment
} from '../../actions/comment_actions';
import CommentForm from './comment_form';

const mapStateToProps = state => {
  console.log(state)
  return({
    user_id: state.session.user.id,
    
  })
};

const mapDispatchToProps = dispatch => {
  return {
    fetchComments: () => dispatch(fetchComments()),
    fetchComment: id => dispatch(fetchComment(id)),
    fetchDeckComments: id => dispatch(fetchDeckComments(id)),
    createComment: comment => dispatch(createComment(comment)),
    updateComment: comment => dispatch(updateComment(comment)),
    deleteComment: id => dispatch(deleteComment(id))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentForm);