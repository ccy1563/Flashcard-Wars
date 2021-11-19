import React from 'react';
import { Link, withRouter } from 'react-router-dom';
// import UserDeckIndexItem from './user_deck_index_item';
import '../../stylesheets/user_profile.css'
import DeckFormContainer from '../../components/deck/deck_form_container';
import DeckTitle from '../deck/deck_title'
import FlashCardForm from '../flashcard/flashcard_form'
import UserDeckIndexItem from '../user_profile/user_deck_index_item'

class UserProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            flashcardArray: []
        }
    }

    componentDidMount() {
        // debugger
        this.props.fetchUserDecks(this.props.userId);
    }

    handleDelete(e, deckId) {
        e.preventDefault();
        this.props.eraseDeck(deckId);
    }

    render() {

        // debugger

        // if (!this.props.deck) ;

        const allMyDecks = this.props.myDecks.map(deck => {
            // debugger
            return (
                <UserDeckIndexItem
                 key={deck._id}
                 deck={deck} 
                 reviseDeck={this.props.reviseDeck}
                 createFlashcard={this.props.createFlashcard}
                 eraseDeck={this.props.eraseDeck}
                 />
            )
        });

        if (allMyDecks.length > 0) {
            return (
                <div className='user-profile-page'>
                    <div>
                        <DeckFormContainer />
                    </div>
                    {/* <Link to="/decks">
                    <button className='user-profile-create-deck-button'>
                        Create a deck
                    </button>
                </Link> */}
                    <div className='decks-container'>
                        {allMyDecks}
                    </div>
                </div>
            )
        } else {
            return (
                <div className='empty-profile-page'>
                    <div>
                        <DeckFormContainer />
                    </div>
                    <div className='empty-profile-page-text-list'>
                        <div className='empty-deck-page'>
                            You have no decks
                        </div>
                        {/* <div className='empty-deck-page-2'>
                        </div> */}
                    </div>
                </div>
            )
        }
    }

}

export default withRouter(UserProfile);