import { connect } from 'react-redux';
import {
    fetchFlashcards,
    fetchFlashcard,
    fetchDeckFlashcards,
    createFlashcard,
    updateFlashcard,
    deleteFlashcard
} from '../../actions/flashcard_actions';
import '../newCss.css';
import FlashcardForm from './flashcard_form';

const mapStateToProps = (state, myProps) => {

    // debugger
    return ({
        user_id: state.session.user.id,
        deckId: myProps.match.params.deckId,
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
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FlashcardForm);