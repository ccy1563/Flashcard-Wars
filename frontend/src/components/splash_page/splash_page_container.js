import { connect } from 'react-redux';
import {
  fetchAllDecks
} from '../../actions/deck_actions';

import SplashPage from './splash_page';

const mapStateToProps = state => {
  console.log(state)
  return ({
    decks: Object.values(state.entities.decks)
  })
}

const mapDispatchToProps = dispatch => {
  return {
    fetchAllDecks: () => dispatch(fetchAllDecks()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SplashPage);