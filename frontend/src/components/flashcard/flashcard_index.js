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


    handleDelete(e, flashcardId) {
        e.preventDefault();
        // debugger
        this.props.deleteFlashcard(flashcardId)
            .then(
                this.props.fetchDeckFlashcards(this.props.deckId)
                    .then(res => {
                        this.setState({
                            flashcardArray: Object.values(res.flashcards.data)
                        })
                    })
            )
    }

    render() {

        // debugger

        
        const { flashcardArray } = this.state;


        if (flashcardArray.length === 0) return null;

        // debugger
        const allFlashcardsInDeck = flashcardArray.map(flashcard => {
            // debugger
            return (
                <div key={flashcard._id}>
                    <div>Title: {flashcard.title}</div>
                    <div>Text: {flashcard.text}</div>
                    <Link to={`/flashcard/${flashcard._id}/deck/${flashcard.deck}`}><button>Edit</button></Link>
                    {/* {this.openEditForm()} */}
                    <button onClick={(e) => this.handleDelete(e, flashcard._id)}>Delete</button>
                </div>
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