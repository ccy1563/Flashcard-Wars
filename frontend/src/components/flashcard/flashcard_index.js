import React from 'react';
import { Link, Redirect, withRouter } from 'react-router-dom';
import FlashcardIndexItem from './flashcard_index_item';
import '../../stylesheets/flashcard_index.css'
import FlashcardEdit from '../flashcard/flashcard_edit'

class FlashcardIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            flashcardArray: [],
            flag: false,
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
        window.location.reload();
    }

    render() {
        // debugger
        
        const { flashcardArray } = this.state;


        // debugger
        // if (flashcardArray.length === 0) return null;

        const allFlashcardsInDeck = flashcardArray.map(flashcard => {
            // debugger
            return (
                <div key={flashcard._id} className='flashcard-index-card-form'>
                    <div>
                        <div className='flashcard-index-card-img'>
                        </div>
                        <div className="flashcard-index-card-top">
                            <div className="flashcard-index-card-form-header">
                                <div>{flashcard.title}</div>
                            </div>
                            <div className="flashcard-index-card-body">
                                <div>{flashcard.text}</div>
                            </div>
                        </div>
                    </div>

                    {/* <Link className='flashcard-index-edit-link'
                          to={`/flashcard/${flashcard._id}/deck/${flashcard.deck}`}>
                        <button className='flashcard-index-button'>
                            Edit
                        </button>
                    </Link> */}

                    {/* <button 
                        className='flashcard-index-button'
                        onClick={(e)=>this.handleOpen(e)}>
                        Edit
                    </button> */}
                    <FlashcardEdit 
                        target={flashcard}
                        updateFlashcard={this.props.updateFlashcard}
                    />
                    
                    {/* {this.openEditForm()} */}
                    <button className='flashcard-index-button' onClick={(e) => this.handleDelete(e, flashcard._id)}>Delete</button>
                </div>
            )
        });

        console.log("saljkfl;kasd")
        console.log(allFlashcardsInDeck.length)

        if (allFlashcardsInDeck.length == 0) {
            return (
                <div className='empty-profile-page-text-list'>
                    <div className='empty-flashcard-index'>
                        No flashcards are in this deck
                    </div>
                </div>
            )
        } else {
            return (
                <div className='flashcard-index-page'>
                    {allFlashcardsInDeck}
                </div>
            )
        }
    }

}

export default withRouter(FlashcardIndex);