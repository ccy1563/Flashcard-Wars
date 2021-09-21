import axios from 'axios';

export const getDecks = () =>{
  return axios.get('/api/decks')
};

export const getUserDeck = id =>{
  return axios.get(`/api/decks/user/${id}`)
};

export const createDeck = data => {
  return axios.post(`/api/decks/`, data)
}

export const updateDeck = data => {
  return axios.patch(`/api/decks/${data.id}`, data)
}

export const deleteDeck = id => {
  return axios.delete(`/api/decks/${id}`)
}
