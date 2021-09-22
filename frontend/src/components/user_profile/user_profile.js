import React from 'react';
import { Link, Redirect, withRouter } from 'react-router-dom';
import UserDeckIndexItem from './user_deck_index_item';


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
                <div>
                    <div>Title: {deck.title}</div>
                    <Link to={`/flashcard/user/${deck.user}/deck/${deck._id}/create`}>
                        <button>
                            Add Card
                        </button>
                    </Link>
                    <Link to={`/flashcard/deck/${deck._id}`}>
                        <button>
                            Show all cards
                        </button>
                    </Link>
                    <button onClick={(e) => this.handleDelete(e, deck._id)}>
                        Delete Deck
                    </button>
                    <Link to={`/practice/deck/${deck._id}`}>
                        <button>
                            Practice Typing
                        </button>
                    </Link>
                </div>
            )
        });

        return (
            <div>
                {allMyDecks}
                <Link to="/decks">
                    <button>
                        Create a deck
                    </button>
                </Link>
            </div>
        )
    }

}

export default withRouter(UserProfile);