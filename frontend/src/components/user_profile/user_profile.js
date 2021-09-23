import React from 'react';
import { Link, Redirect, withRouter } from 'react-router-dom';
import UserDeckIndexItem from './user_deck_index_item';
import '../../stylesheets/user_profile.css'

class UserProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            flashcardArray: []
        }
    }

    componentDidMount() {
        this.props.fetchUserDecks(this.props.userId);
    }

    handleDelete(e, deckId) {
        e.preventDefault();
        // this.props.fetchDeckFlashcards(deckId)
        //     .then(res => {
        //         this.setState({
        //             flashcardArray: Object.values(res.flashcards.data)
        //         })
        //     })
        // this.state.flashcardArray.forEach(flashcard => {
        //     this.props.deleteFlashcard(flashcard._id);
        // })
        this.props.eraseDeck(deckId);
    }

    render() {

        const allMyDecks = this.props.myDecks.map(deck => {
            // debugger
            return (
                <div className='user-profile-all-decks'>
                    <div className='deck-title'>{deck.title}</div>
                    <div className='user-profile-all-buttons'>

                        <Link to={`/flashcard/user/${deck.user}/deck/${deck._id}/create`}>
                            <button className='user-profile-button'>
                                Add Card
                            </button>
                        </Link>

                        <Link to={`/flashcard/deck/${deck._id}`}>
                            <button className='user-profile-button'>
                                Show all cards
                            </button>
                        </Link>

                        <button className='user-profile-button' onClick={(e) => this.handleDelete(e, deck._id)}>
                            Delete Deck
                        </button>
                        <Link to={`/practice/deck/${deck._id}`}>
                            <button className='user-profile-button'>
                                Practice Typing
                            </button>
                        </Link>
                    </div>
                </div>
            )
        });

        return (
            <div>
                <Link to="/decks">
                    <button className='user-profile-create-deck-button'>
                        Create a deck
                    </button>
                </Link>
                {allMyDecks}
            </div>
        )
    }

}

export default withRouter(UserProfile);