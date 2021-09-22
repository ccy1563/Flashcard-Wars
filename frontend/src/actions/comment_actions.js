import * as CommentApiUtil from '../util/comment_api_util';

export const RECEIVE_COMMENTS ='RECEIVE_COMMENTS';
export const RECEIVE_DECK_COMMENTS ='RECEIVE_DECK_COMMENTS';
export const RECEIVE_COMMENT ='RECEIVE_COMMENT';
export const REMOVE_COMMENT ='REMOVE_COMMENT';

export const receiveComments = comments => {
  return({
    type: RECEIVE_COMMENTS,
    comments
  })
}

export const receiveDeckComments = comments => {
  return({
    type: RECEIVE_DECK_COMMENTS,
    comments
  })
}

export const receiveComment = comment => {
  return({
    type: RECEIVE_COMMENT,
    comment
  })
}

export const removeComment = commentId => {
  return({
    type: REMOVE_COMMENT,
    commentId
  })
}

export const fetchComments = () => dispatch => {
  return CommentApiUtil.fetchComments()
    .then(comments => dispatch(receiveComments(comments)))
}

export const fetchComment = id => dispatch => {
  return CommentApiUtil.fetchComment(id)
    .then(comment => dispatch(removeComment(comment)))
}

export const fetchDeckComments = deckId => dispatch => {
  return CommentApiUtil.fetchDeckComments(deckId)
    .then(comments => dispatch(receiveDeckComments(comments)))
}

export const createComment = data => dispatch => {
  return CommentApiUtil.createComment(data)
    .then(comment => dispatch(receiveComment(comment)))
}

export const updateComment = data => dispatch => {
  return CommentApiUtil.updateComment(data)
    .then(comment => dispatch(receiveComment(comment)))
}

export const deleteComment = id => dispatch => {
  return CommentApiUtil.deleteComment(id)
    .then( () => dispatch(removeComment(id)))
}