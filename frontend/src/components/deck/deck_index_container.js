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

import '../newCss.css';
import DeckIndex from './deck_index';

const mapStateToProps = state => {

    // debugger
    let tempId = undefined;
    if (state.session.user) tempId = state.session.user.id;
    return ({
        user_id: tempId
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
)(DeckIndex);