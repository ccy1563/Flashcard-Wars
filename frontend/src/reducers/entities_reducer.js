import { combineReducers } from 'redux';
import decks from './deck_reducer';
import flashcards from './flashcard_reducer';
import comments from './comment_reducer';

const EntitiesReducer = combineReducers({
    decks,
    flashcards,
    comments
});

export default EntitiesReducer;