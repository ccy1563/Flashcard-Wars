import axios from 'axios';

export const getFlashcards = () =>{
  return axios.get('/api/flashcards')
};

export const getDeckFlashcards = id =>{
  return axios.get(`/api/flashcards/deck/${id}`)
};

export const createFlashcard = data => {
  return axios.post(`/api/deck/${data.deck}/flashcards/`, data)
};
