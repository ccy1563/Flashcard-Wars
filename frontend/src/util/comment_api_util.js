import axios from 'axios';

export const fetchComments = () => {
  return axios.get('/api/comments')
};

export const fetchDeckComments = deckId => {
  return axios.get(`/api/comments/deck/${deckId}`)
};

export const fetchComment = id => {
  return axios.get(`/api/comments/${id}`)
}

export const createComment = data => {
  return axios.post(`/api/comments/deck/${data.deck}`, data)
}

export const updateComment = data => {
  return axios.patch(`/api/comments/${data.id}`, data)
}

export const deleteComment = id => {
  return axios.delete(`/api/comments/${id}`)
}