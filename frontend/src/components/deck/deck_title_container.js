import { connect } from 'react-redux';
import { 
  reviseDeck,
  fetchDeck
 } from '../../actions/deck_actions';
import '../newCss.css';
import DeckTitle from './deck_title';

const mapStateToProps = (state, myProps) => {

  let temp = undefined;

  if (state.session.user) temp = state.session.user.id;
  // debugger
  return({
    user_id: temp,
    deckId: myProps.match.params.deckId,
    decks: state.entities.decks,
  });
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchDeck: id => dispatch(fetchDeck(id)),
    reviseDeck: deck => dispatch(reviseDeck(deck)),
  }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DeckTitle);