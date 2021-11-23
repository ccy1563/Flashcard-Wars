import React from 'react';
import { Link, withRouter } from 'react-router-dom';
// import UserDeckIndexItem from './user_deck_index_item';
import '../../stylesheets/user_profile.css'
import DeckFormContainer from '../../components/deck/deck_form_container';
import DeckTitle from '../deck/deck_title'
import FlashCardForm from '../flashcard/flashcard_form'

class UserDeckIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            flashcardArray: []
        }
    }



    handleDelete(e, deckId) {
        e.preventDefault();
        this.props.eraseDeck(deckId);
    }

    render() {

        // debugger

        // if (!this.props.deck) ;

        const { deck } = this.props;

        return (
            <div className='user-profile-all-decks'>

                <Link className='deck-title-link' to={`/decks/${deck._id}`}>
                    <p className="deck-title-p">
                        {deck.title}
                    </p>
                    <div className='deck-title'></div>
                </Link>
                <div className='user-profile-all-buttons'>
                    {/* <Link className='user-profile-link' to={`/decks/${deck._id}/edit`}>
                            <button className='user-profile-button'>
                                Edit Title
                            </button>
                        </Link> */}

                    <DeckTitle
                        reviseDeck={this.props.reviseDeck}
                        target={deck}
                    />

                    {/* <Link className='user-profile-link' to={`/flashcard/user/${deck.user}/deck/${deck._id}/create`}>
                            <button className='user-profile-button'>
                                Add Card
                            </button>
                        </Link> */}

                    <FlashCardForm
                        createFlashcard={this.props.createFlashcard}
                        target={deck}
                    />


                    <Link className='user-profile-link' to={`/flashcard/deck/${deck._id}`}>
                        <button className='user-profile-button'>
                            Show all Cards
                        </button>
                    </Link>

                    <button className='user-profile-button' onClick={(e) => this.handleDelete(e, deck._id)}>
                        Delete Deck
                    </button>
                    <Link className='user-profile-link' to={`/practice/deck/${deck._id}`}>
                        <button className='user-profile-button'>
                            Practice Typing
                        </button>
                    </Link>
                </div>
            </div>
        )
    }

}

export default withRouter(UserDeckIndexItem);