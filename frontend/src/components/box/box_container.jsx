import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
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

import Box from './box.jsx';

const mapStateToProps = (state, ownProps)  => {

    // debugger
    return ({
        // user_id: state.session.user.id,
        flashcards: state.entities.flashcards.data,
        deckId: ownProps.match.params.deckId,
        deck: state.entities.decks.data
    });
};

const mapDispatchToProps = (dispatch) => {
    return {
        // fetchFlashcards: () => dispatch(fetchFlashcards()),
        // fetchFlashcard: id => dispatch(fetchFlashcard(id)),
        fetchDeckFlashcards: deckId => dispatch(fetchDeckFlashcards(deckId)),
        // createFlashcard: data => dispatch(createFlashcard(data)),
        // updateFlashcard: data => dispatch(updateFlashcard(data)),
        // deleteFlashcard: id => dispatch(deleteFlashcard(id)),


        // fetchAllDecks: () => dispatch(fetchAllDecks()),
        fetchDeck: id => dispatch(fetchDeck(id)),
        // fetchUserDecks: id => dispatch(fetchUserDecks(id)),
        // composeDeck: deck => dispatch(composeDeck(deck)),
        // reviseDeck: deck => dispatch(reviseDeck(deck)),
        // eraseDeck: id => dispatch(eraseDeck(id))
    }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Box));