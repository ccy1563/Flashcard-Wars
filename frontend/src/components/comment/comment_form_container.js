import { connect } from 'react-redux';
import {
  createComment,
} from '../../actions/comment_actions';
import CommentForm from './comment_form';

const mapStateToProps = (state, myProps) => {
  console.log(state)
  return({
    user_id: state.session.user.id,
    deckId: myProps.match.params.deckId,
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