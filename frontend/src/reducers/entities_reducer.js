import { combineReducers } from 'redux';
import decks from './deck_reducer';
import flashcards from './flashcard_reducer';

const EntitiesReducer = combineReducers({
    decks,
    flashcards,
});

export default EntitiesReducer;