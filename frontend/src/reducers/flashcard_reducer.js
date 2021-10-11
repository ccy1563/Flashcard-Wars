import {
    RECEIVE_FLASHCARDS,
    RECEIVE_DECK_FLASHCARDS,
    RECEIVE_FLASHCARD,
    REMOVE_FLASHCARD,
} from '../actions/flashcard_actions'

const flashcardReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    
    let flashcards = undefined;     
    if (action.flashcards) {
        flashcards = action.flashcards.data
    }
    let nextState = {};
    switch(action.type) {
        case RECEIVE_FLASHCARDS:
            // return { ...action.flashcards };
            flashcards.forEach((flashcard) => {
                nextState[flashcard._id] = flashcard
            })
            return nextState;
        case RECEIVE_DECK_FLASHCARDS:
            // let nextState = {};
            flashcards.forEach((flashcard) => {
                nextState[flashcard._id] = flashcard
            })
            return nextState;
        case RECEIVE_FLASHCARD:
            return action.flashcard;
        case REMOVE_FLASHCARD:
            delete newState[action.id];
            return newState;
        default:
            return state;
    }
}

export default flashcardReducer;