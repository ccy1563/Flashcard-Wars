import React from 'react';
import { Link, Redirect, withRouter } from 'react-router-dom';
import UserDeckIndexItem from './user_deck_index_item';


class UserProfile extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchUserDecks(this.props.userId);
    }

    render() {

        const allMyDecks = this.props.myDecks.map(deck => {
            // debugger
            return (
                <UserDeckIndexItem 
                    key={deck._id}
                    deck={deck}
                />
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