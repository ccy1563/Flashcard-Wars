import {
  RECEIVE_COMMENTS,
  RECEIVE_DECK_COMMENTS,
  RECEIVE_COMMENT,
  REMOVE_COMMENT
} from '../actions/comment_actions'

const commentReducer = (state= {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_COMMENTS:
      return { ...action.comments };
    case RECEIVE_DECK_COMMENTS:
      let comments = action.comments.data
      let nextState = {};
      comments.forEach(comment => {
        nextState[comment._id] = comment
      })
      return nextState;
    case RECEIVE_COMMENT:
      return action.comment;
    case REMOVE_COMMENT:
      delete newState[action.id];
      return newState;
    default:
      return state;
  }
}

export default commentReducer;