import React from 'react';
import { Link, Redirect, withRouter } from 'react-router-dom';
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
            flashcardsFlag: {},

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

    showFlashcard(e, id) {
        e.preventDefault();
        // debugger
        let newArr = this.state.flashcardsFlag;
        (newArr[id] === 1) ? newArr[id] = 0 : newArr[id] = 1;
        this.setState({
          flashcardsFlag: newArr,
        })
        // debugger
    }

    render() {
        // debugger
        
        const { flashcardArray } = this.state;


        // debugger
        // if (flashcardArray.length == 0) return null;

        const allFlashcardsInDeck = flashcardArray.map(flashcard => {
            // debugger
            return (
                <div className="deck-show-flashcard"key={flashcard._id}>
                    <div onClick={(e) => this.showFlashcard(e, flashcard._id)} className="deck-show-flashcard-title"> {flashcard.title}</div>
                    {this.state.flashcardsFlag[flashcard._id] === 1 ? <div className="deck-show-flashcard-text">{flashcard.text}</div> : null}
                        <FlashcardEdit 
                            target={flashcard}
                            updateFlashcard={this.props.updateFlashcard}
                        />
                        <button onClick={(e) => this.handleDelete(e, flashcard._id)}>Delete</button>

                </div>
            )
        });

        if (allFlashcardsInDeck.length === 0) {
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
                <div className="deck-show-container">
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
                    <div className="deck-show-render-flashcard">
                        <div className="deck-show-header">Flashcards</div>
                        { allFlashcardsInDeck }
                    </div>
                </div>

            )
        }
    }

}

export default withRouter(FlashcardIndex);