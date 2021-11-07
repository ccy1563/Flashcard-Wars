import axios from 'axios';

export const fetchDecks = () =>{
  return axios.get('/api/decks')
};

export const fetchDeck = id => {
  return axios.get(`/api/decks/${id}`)
}

export const fetchUserDeck = id =>{
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
