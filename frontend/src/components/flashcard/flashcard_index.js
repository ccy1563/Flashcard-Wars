import React from 'react';
import { Link, Redirect, withRouter } from 'react-router-dom';
import FlashcardIndexItem from './flashcard_index_item';


class FlashcardIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            flashcardArray: []
        }
    }

    componentDidMount() {
        this.props.fetchDeckFlashcards(this.props.deckId)
            .then(res => {
                // console.log("this is res: ",res)
                this.setState({
                    flashcardArray: Object.values(res.flashcards.data)
                })
                // console.log("this is deckArray", this.state.deckArray)
            })
    }

    render() {

        // debugger

        const { flashcardArray } = this.state;

        if (flashcardArray.length === 0) return null;

        // debugger
        const allFlashcardsInDeck = flashcardArray.map(flashcard => {
            // debugger
            return (
                <FlashcardIndexItem
                    key={flashcard._id}
                    flashcard={flashcard}
                />
            )
        });

        return (
            <div>
                {allFlashcardsInDeck}
            </div>
        )
    }

}

export default withRouter(FlashcardIndex);