import React from 'react';
import { Link, Redirect, withRouter } from 'react-router-dom';
import FlashcardIndexItem from './flashcard_index_item';
import '../../stylesheets/flashcard_index.css'
import FlashcardEdit from '../flashcard/flashcard_edit'

class FlashcardIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            text: '',
            deck: this.props.deckId,
            flashcardArray: [],
            flag: false,
        }
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
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

    handleOpen(e) {
        e.preventDefault();
        this.setState({
            flag: true,
        })
    }

    handleClose(e) {
        e.preventDefault();
        this.setState({
            flag: false,
        })
    }

    // componentDidUpdate() {
    //     if (this.state.flag) this.setState({flag: false});
    // }

    handleSubmit(e) {
        e.preventDefault();
        // debugger
        let flashcard = {
            title: this.state.title,
            text: this.state.text,
            deck: this.state.deck,
        };
        this.props.createFlashcard(flashcard);
        // this.navigateToUserPage();
        this.setState({flag: false});
        window.location.reload(false);
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
        // if (flashcardArray.length == 0) return null;

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
{/* 
                    <button 
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

        if (allFlashcardsInDeck.length == 0) {
            return (
                <div>
                    <div className='new-deck-bttn-modal'>
                        <button
                            onClick={(e) => this.handleOpen(e)}
                            className='profile-create-deck-modal'>
                            Create Card
                        </button>
                    {
                        this.state.flag ?
                                <div className='modal'>
                                    <form onSubmit={(e)=>this.handleSubmit(e)}>
                                        <div className='flashcard-form'>
                                            <input
                                                className='flashcard-form-title-input'
                                                type="text"
                                                value={this.state.title}
                                                onChange={this.update('title')}
                                                placeholder="title"
                                            />
                                            <br />
                                            <textarea
                                                className='flashcard-form-textarea'
                                                placeholder="enter text here..."
                                                cols="65"
                                                rows="4"
                                                value={this.state.text}
                                                onChange={this.update("text")}
                                            />
                                            <input className='flashcard-form-submit' type="submit" value="Add card" />

                                            <button
                                                className='edit-card-close'
                                                onClick={(e) => this.handleClose(e)}>
                                                X
                                            </button>
                                        </div>
                                    </form>
                                </div> : null
                    }
                </div>
                    <div className='empty-profile-page-text-list'>
                        <div className='empty-flashcard-index'>
                            No flashcards are in this deck
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div>
                    <div className='new-deck-bttn-modal'>
                        <button
                            onClick={(e) => this.handleOpen(e)}
                            className='profile-create-deck-modal'>
                            Create Card
                        </button>
                    </div>
                    {
                        this.state.flag ?
                            <div className='modal'>
                                <form onSubmit={(e) => this.handleSubmit(e)}>
                                    <div className='flashcard-form'>
                                        <input
                                            className='flashcard-form-title-input'
                                            type="text"
                                            value={this.state.title}
                                            onChange={this.update('title')}
                                            placeholder="title"
                                        />
                                        <br />
                                        <textarea
                                            className='flashcard-form-textarea'
                                            placeholder="enter text here..."
                                            cols="65"
                                            rows="4"
                                            value={this.state.text}
                                            onChange={this.update("text")}
                                        />
                                        <input className='flashcard-form-submit' type="submit" value="Add card" />

                                        <button
                                            className='edit-card-close'
                                            onClick={(e) => this.handleClose(e)}>
                                            X
                                        </button>
                                    </div>
                                </form>
                            </div> : null
                    }
                    <div className='flashcard-index-page'>
                        {allFlashcardsInDeck}
                    </div>
                </div>

            )
        }
    }

}

export default withRouter(FlashcardIndex);