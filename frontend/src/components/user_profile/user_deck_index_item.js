import React from 'react';
import { Link, Redirect } from 'react-router-dom';

class UserDeckIndexItem extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { deck } = this.props;
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
                <Link to={`/practice/deck/${deck._id}`}>
                    <button>
                        Practice Typing
                    </button>
                </Link>
            </div>
        )
    }
}

export default UserDeckIndexItem;