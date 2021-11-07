import { connect } from 'react-redux';
import {
  createComment,
} from '../../actions/comment_actions';
import CommentForm from './comment_form';

const mapStateToProps = (state, myProps) => {
  // console.log(state)
  // console.log(myProps)
  let temp = undefined;
  if (state.session.user) temp = state.session.user.id;
  return({
    user_id: temp,
  })
};

const mapDispatchToProps = dispatch => {
  return {
    createComment: comment => dispatch(createComment(comment)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentForm);