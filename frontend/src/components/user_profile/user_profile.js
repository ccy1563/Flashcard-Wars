import React from 'react';
import { Link, withRouter } from 'react-router-dom';
// import UserDeckIndexItem from './user_deck_index_item';
import '../../stylesheets/user_profile.css'
import DeckFormContainer from '../../components/deck/deck_form_container';
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
                    
                    <div className='deck-title'>
                        <Link to={`/decks/${deck._id}`}>
                            <p>{deck.title}</p>
                        </Link>
                    </div>
                    <div className='user-profile-all-buttons'>

                        <Link className='user-profile-link' to={`/flashcard/user/${deck.user}/deck/${deck._id}/create`}>
                            <button className='user-profile-button'>
                                Add Card
                            </button>
                        </Link>

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
        });

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
    }

}

export default withRouter(UserProfile);