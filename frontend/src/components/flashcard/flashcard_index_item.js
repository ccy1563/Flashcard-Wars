import React from 'react';
import { Link, Redirect } from 'react-router-dom';

class FlashcardIndexItem extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        // debugger
        const { flashcard } = this.props;
        // debugger
        return (
            <div>
                <div>Title: {flashcard.title}</div>
                <div>Text: {flashcard.text}</div>
            </div>
        )
    }
}

export default FlashcardIndexItem;