import { connect } from 'react-redux';
import { fetchDeck } from '../../actions/deck_actions';

import DeckShow from './deck_show'

const mapStateToProps = (state, myProps) => {
  debugger
  return({
    user_id: state.session.user.id,
    deckId: myProps.match.params.deckId,
  })
};

const mapDispatchToProps = dispatch => {
  return {
    fetchDeck: id => dispatch(fetchDeck(id)),
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeckShow);