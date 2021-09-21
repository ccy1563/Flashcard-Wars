import {   
  RECEIVE_ALL_DECKS,
  RECEIVE_ALL_USER_DECKS,
  RECEIVE_DECK,
  UPDATE_A_DECK,
  DELETE_A_DECK
} from '../actions/deck_actions';

const DeckReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  
  switch(action.type) {
    case RECEIVE_ALL_DECKS:
      return { ...action.decks };

    case RECEIVE_ALL_USER_DECKS:
      // console.log(action)
      // debugger
      let decks = action.decks.data
      let nextState = { }

      decks.forEach((deck) => {
        nextState[deck._id]= deck
      })
      // debugger
      return nextState;

    case RECEIVE_DECK:
      return action.deck

    case UPDATE_A_DECK:
      return newState;

    case DELETE_A_DECK:
      // debugger
      delete newState[action.id];
      return newState;
    default:
      return state;
  }
}

export default DeckReducer;