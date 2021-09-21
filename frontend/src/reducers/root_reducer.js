import { combineReducers } from 'redux';
import session from './session_reducer';
import errors from './errors_reducer';
import decks from './deck_reducer';

const RootReducer = combineReducers({
    session,
    errors,
    decks
});

export default RootReducer;