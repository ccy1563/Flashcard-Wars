import { connect } from 'react-redux';
import { 
  fetchAllDecks,
  fetchUserDecks,
  composeDeck,
  reviseDeck,
  eraseDeck,
  fetchDeck
 } from '../../actions/deck_actions';
import '../newCss.css';
import DeckForm from './deck_form';

const mapStateToProps = state => {

    // debugger
    return({
      user_id: state.session.user.id
    });
};

const mapDispatchToProps = (dispatch) => {
  return {
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
)(DeckForm);