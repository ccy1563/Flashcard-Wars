import axios from 'axios';

export const fetchFlashcards = () =>{
  return axios.get('/api/flashcards')
};

export const fetchDeckFlashcards = deckId =>{
  return axios.get(`/api/flashcards/deck/${deckId}`)
};

export const fetchFlashcard = id => {
  return axios.get(`/api/flashcards/${id}`)
}

export const createFlashcard = data => {
  return axios.post(`/api/flashcards/deck/${data.deck}/`, data)
};

export const updateFlashcard = data => {
  return axios.patch(`/api/flashcards/${data.id}`, data)
}

export const deleteFlashcard = id => {
  // debugger
  return axios.delete(`/api/flashcards/${id}`)
}


// title, text, deck