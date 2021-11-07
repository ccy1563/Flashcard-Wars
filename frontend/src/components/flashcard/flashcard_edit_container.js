import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import {
    fetchFlashcards,
    fetchFlashcard,
    fetchDeckFlashcards,
    createFlashcard,
    updateFlashcard,
    deleteFlashcard
} from '../../actions/flashcard_actions';
import FlashcardEdit from './flashcard_edit';

class FlashcardEditContainer extends React.Component {
    componentDidMount() {
        this.props.fetchFlashcard(this.props.match.params.flashcardId);
        // debugger
    }

    componentDidUpdate() {

    }

    render() {
        const { flashcard } = this.props;
        
        // debugger
        if (!flashcard) return null;
        // debugger
        return (
            <FlashcardEdit
                flashcard={flashcard}
                flashcardId={this.props.flashcardId}
                updateFlashcard={this.props.updateFlashcard}
                fetchFlashcards={this.props.fetchDeckFlashcards}
            />
        )
    }
}

const mapStateToProps = (state, ownProps) => {

    // debugger
    return {
        flashcard: state.entities.flashcards.data,
        flashcardId: ownProps.match.params.flashcardId,
        deckId: ownProps.match.params.deckId,
    }
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FlashcardEditContainer));