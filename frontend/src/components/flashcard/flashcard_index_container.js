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
import FlashcardIndex from './flashcard_index';

const mapStateToProps = (state, myProps) => {

    // debugger
    return ({
        user_id: state.session.user.id,
        deckId: myProps.match.params.deckId,
        flashcardId: myProps.match.params.flashcardId,
        // myFlashcards: Object.values(state.entities.flashcards),
        flashcards: state.entities.flashcards.data,
        // canEdit: false,
        // flashcard: state.entities.flashcards.flashcardId,
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
)(FlashcardIndex);