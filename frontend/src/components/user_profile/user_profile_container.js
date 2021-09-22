import { connect } from 'react-redux';
import {
    fetchAllDecks,
    fetchUserDecks,
    composeDeck,
    reviseDeck,
    eraseDeck,
    fetchDeck
} from '../../actions/deck_actions';

import {
    fetchFlashcards,
    fetchFlashcard,
    fetchDeckFlashcards,
    createFlashcard,
    updateFlashcard,
    deleteFlashcard
} from '../../actions/flashcard_actions';

import UserProfile from './user_profile';

const mapStateToProps = state => {

    // debugger
    let tempId = undefined;
    if (state.session.user) tempId = state.session.user.id;
    return ({
        userId: tempId,
        myDecks: Object.values(state.entities.decks),
        deckFlashcards: Object.values(state.entities.flashcards),
        myFlashcards: Object.values(state.entities.flashcards),
    });
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchFlashcards: () => dispatch(fetchFlashcards()),
        fetchFlashcard: id => dispatch(fetchFlashcard(id)),
        fetchDeckFlashcards: deckId => dispatch(fetchDeckFlashcards(deckId)),
        createFlashcard: data => dispatch(createFlashcard(data)),
        updateFlashcard: data => dispatch(updateFlashcard(data)),
        deleteFlashcard: id => dispatch(deleteFlashcard(id)),


        fetchAllDecks: () => dispatch(fetchAllDecks()),
        fetchDeck: id => dispatch(fetchDeck(id)),
        fetchUserDecks: id => dispatch(fetchUserDecks(id)),
        composeDeck: deck => dispatch(composeDeck(deck)),
        reviseDeck: deck => dispatch(reviseDeck(deck)),
        eraseDeck: id => dispatch(eraseDeck(id))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserProfile);