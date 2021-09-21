import {getDecks, getDeck, getUserDeck, createDeck, updateDeck, deleteDeck} from '../util/deck_api_util';

export const RECEIVE_ALL_DECKS = "RECEIVE_ALL_DECKS";
export const RECEIVE_ALL_USER_DECKS = "RECEIVE_ALL_USER_DECKS"
export const RECEIVE_DECK = "RECEIVE_DECK";
export const UPDATE_A_DECK = "UPDATE_A_DECK";
export const DELETE_A_DECK = "DELETE_A_DECK";

// errors

export const recieveAllDecks = decks => {
  return({
    type: RECEIVE_ALL_DECKS,
    decks
  })
}

export const recieveAllUserDecks = decks => {
  return({
    type: RECEIVE_ALL_USER_DECKS,
    decks
  })
}

export const recieveDeck = deck => {
  return({
    type: RECEIVE_DECK,
    deck
  })
}

export const updateADeck = deck => {
  return({
    type: UPDATE_A_DECK,
    deck
  })
}

export const deleteADeck = id => {
  return({
    type: DELETE_A_DECK,
    id
  })
}

export const fetchAllDecks = () => dispatch =>(
  getDecks()
    .then(decks => dispatch(recieveAllDecks(decks)))
)
export const fetchUserDecks = (id) => dispatch =>(
  getUserDeck(id)
    .then(decks => dispatch(recieveAllUserDecks(decks)))
)

export const fetchDeck = id => dispatch => {
  getDeck(id)
    .then(deck => dispatch(recieveDeck(deck)))
}


export const composeDeck = (data) => dispatch =>(
  createDeck(data)
    .then(deck => dispatch(recieveDeck(deck)))
)

export const reviseDeck = (data) => dispatch =>(
  updateDeck(data)
    .then(deck => dispatch(updateADeck(deck)))
)

export const eraseDeck = id => dispatch => {
  // debugger
  return (
    deleteDeck(id)
      .then( () => dispatch(deleteADeck(id)))
  )
}
