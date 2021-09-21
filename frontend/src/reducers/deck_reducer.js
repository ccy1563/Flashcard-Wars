import {   
  RECEIVE_ALL_DECKS,
  RECEIVE_DECK,
  UPDATE_A_DECK,
  DELETE_A_DECK 
} from '../actions/deck_actions';

const DeckReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  
  switch(action.type) {
    case RECEIVE_ALL_DECKS:
      console.log(action)
      return { ...action.decks };
    case RECEIVE_DECK:
      return { ...state, [action.deck.id] : action.deck }
    case UPDATE_A_DECK:
      return newState;
    case DELETE_A_DECK:
      delete newState[action.id];
      return newState;
    default:
      return state;
  }
}

export default DeckReducer;