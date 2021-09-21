import * as FlashcardApiUtil from "../util/flashcard_api_util";


export const RECEIVE_FLASHCARDS = 'RECEIVE_FLASHCARDS';
export const RECEIVE_DECK_FLASHCARDS = 'RECEIVE_DECK_FLASHCARDS';
export const RECEIVE_FLASHCARD = 'RECEIVE_FLASHCARD';
export const REMOVE_FLASHCARD = 'REMOVE_FLASHCARD';

export const receiveFlashcards = flashcards => {
    return ({
        type: RECEIVE_FLASHCARDS,
        flashcards,
    })
}

export const receiveDeckFlashcards = flashcards => {
    return ({
        type: RECEIVE_DECK_FLASHCARDS,
        flashcards,
    })
}

export const receiveFlashcard = flashcard => {
    return ({
        type: RECEIVE_FLASHCARD,
        flashcard,
    })
}

export const removeFlashcard = flashcardId => {
    return ({
        type: REMOVE_FLASHCARD,
        flashcardId,
    })
}

export const fetchFlashcards = () => dispatch => {
    return FlashcardApiUtil.fetchFlashcards()
        .then(flashcards => dispatch(receiveFlashcards(flashcards)));
}

export const fetchFlashcard = id => dispatch => {
    return FlashcardApiUtil.fetchFlashcard()
        .then(flashcard => dispatch(receiveFlashcard(flashcard)));
}

export const fetchDeckFlashcards = deckId => dispatch => {
    return FlashcardApiUtil.fetchDeckFlashcards(deckId)
        .then(flashcards => dispatch(receiveFlashcards(flashcards)));
}

export const createFlashcard = data => dispatch => {
    return FlashcardApiUtil.createFlashcard(data)
        .then(flashcard => dispatch(receiveFlashcard(flashcard)));
}


export const updateFlashcard = data => dispatch => {
    return FlashcardApiUtil.updateFlashcard(data)
        .then(flashcard => dispatch(receiveFlashcard(flashcard)));
}

export const deleteFlashcard = id => dispatch => {
    return FlashcardApiUtil.deleteFlashcard(id)
        .then(() => dispatch(removeFlashcard(id)))
}