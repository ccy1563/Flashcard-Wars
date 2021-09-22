import React from 'react';
import { Link, Redirect, withRouter } from 'react-router-dom';

class FlashcardIndexItem extends React.Component {

    constructor(props) {
        super(props);
        this.navigateToUserPage = this.navigateToUserPage.bind(this);
    }

    handleDelete(e) {
        e.preventDefault();
        // debugger
        this.props.deleteFlashcard(this.props.flashcard._id)
        this.navigateToUserPage();
        // debugger
    }

    navigateToUserPage() {
        const url = `/user`
        this.props.history.push(url);
    }

    render() {
        // debugger
        const { flashcard } = this.props;
        // debugger
        return (
            <div>
                <div>Title: {flashcard.title}</div>
                <div>Text: {flashcard.text}</div>
                <div>
                    {/* <Link><button>Edit</button></Link> */}
                    <button>Edit</button>
                    {/* {this.openEditForm()} */}
                    <button onClick={(e) => this.handleDelete(e)}>Delete</button>
                </div>
            </div>
        )
    }
}

export default withRouter(FlashcardIndexItem);