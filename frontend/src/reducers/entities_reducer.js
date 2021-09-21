import { combineReducers } from 'redux';
import decks from './deck_reducer';

const EntitiesReducer = combineReducers({
    decks
});

export default EntitiesReducer;