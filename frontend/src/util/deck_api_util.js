import axios from 'axios';

export const getDecks = () =>{
  return axios.get('/api/decks')
};

export const getDeck = id => {
  return axios.get(`/api/decks/${id}`)
}

export const getUserDeck = id =>{
  return axios.get(`/api/decks/user/${id}`)
};

export const createDeck = data => {
  // console.log(data)
  return axios.post(`/api/decks/user/${data.user}`, data)
}

export const updateDeck = data => {
  return axios.patch(`/api/decks/${data.id}`, data)
}

export const deleteDeck = id => {
  // debugger
  return axios.delete(`/api/decks/${id}`)
}
