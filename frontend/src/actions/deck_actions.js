import * as DeckApiUtil from '../util/deck_api_util';

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
  DeckApiUtil.fetchDecks()
    .then(decks => dispatch(recieveAllDecks(decks)))
)
export const fetchUserDecks = (id) => dispatch =>(
  DeckApiUtil.fetchUserDeck(id)
    .then(decks => dispatch(recieveAllUserDecks(decks)))
)

export const fetchDeck = id => dispatch => {
  DeckApiUtil.fetchDeck(id)
    .then(deck => dispatch(recieveDeck(deck)))
}

export const composeDeck = (data) => dispatch =>(
  DeckApiUtil.createDeck(data)
    .then(deck => dispatch(recieveDeck(deck)))
)

export const reviseDeck = (data) => dispatch =>(
  DeckApiUtil.updateDeck(data)
    .then(deck => dispatch(updateADeck(deck)))
)

export const eraseDeck = id => dispatch => {
  // debugger
  return (
    DeckApiUtil.deleteDeck(id)
      .then( () => dispatch(deleteADeck(id)))
  )
}
