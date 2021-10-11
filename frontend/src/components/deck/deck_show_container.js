import { connect } from 'react-redux';
import { fetchDeck, fetchUserDecks } from '../../actions/deck_actions';
import { fetchDeckFlashcards, createFlashcard } from '../../actions/flashcard_actions';
import { fetchDeckComments, createComment, updateComment, deleteComment } from '../../actions/comment_actions';
import { composeDeck } from '../../actions/deck_actions';

import DeckShow from './deck_show'



const mapStateToProps = (state, myProps) => {
  // debugger

  let temp = undefined;
  if (state.session.user) temp = state.session.user.id;
  return({
    user_id: temp,
    decks: Object.values(state.entities.decks),
    deckId: myProps.match.params.deckId,
    comments: Object.values(state.entities.comments),
    flashcards: Object.values(state.entities.flashcards)
  })
};

const mapDispatchToProps = dispatch => {
  return {
    fetchDeck: id => dispatch(fetchDeck(id)),
    fetchDeckFlashcards: id => dispatch(fetchDeckFlashcards(id)),
    fetchDeckComments: id => dispatch(fetchDeckComments(id)),
    createComment: comment => dispatch(createComment(comment)),
    updateComment: comment => dispatch(updateComment(comment)),
    deleteComment: id => dispatch(deleteComment(id)),
    composeDeck: deck => dispatch(composeDeck(deck)),
    fetchUserDecks: id => dispatch(fetchUserDecks(id)),
    createFlashcard: flashcard => dispatch(createFlashcard(flashcard)),
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeckShow);