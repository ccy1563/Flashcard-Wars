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
        const { flashcard } = this.props;
        // debugger
        return (
            <div>
                <div>{flashcard.title}</div>
                <div>{flashcard.text}</div>
                <div>
                    {/* <Link to={}><button>Edit</button></Link> */}
                    {/* <button>Edit</button> */}
                    {/* {this.openEditForm()} */}
                    <button onClick={(e) => this.handleDelete(e)}>Delete</button>
                </div>
            </div>
        )
    }
}

export default withRouter(FlashcardIndexItem);