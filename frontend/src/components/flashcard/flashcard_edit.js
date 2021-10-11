import React from 'react';
import { withRouter } from 'react-router-dom';
import '../../stylesheets/flashcard_form.css'


// title: {
//     type: String,
//         required: true,
//     },
// text: {
//     type: String,
//         required: true,
//     },
// deck: {
//     type: Schema.Types.ObjectId,
//         ref: "decks",
//     },

class FlashcardForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.flashcard;
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.navigateToUserPage = this.navigateToUserPage.bind(this);
    }

    componentDidMount() {
        this.props.fetchFlashcards();
        // debugger
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    // Handle form submission
    handleSubmit(e) {
        e.preventDefault();
        let flashcard = {
            id: this.props.match.params.flashcardId,
            title: this.state.title,
            text: this.state.text,
            deck: this.state.deck,
        };
        this.props.updateFlashcard(flashcard);
        // window.location.reload(false);
        this.navigateToUserPage();
    }

    navigateToUserPage() {
        // debugger
        const url = `/user`
        this.props.history.push(url);
    }

    renderErrors() {
        return (
            <ul>
                {Object.keys(this.state.errors).map((error, i) => (
                    <li key={`error-${i}`}>
                        {this.state.errors[error]}
                    </li>
                ))}
            </ul>
        );
    }

    render() {

        // if (this.state.title === undefined) {
            // window.location.reload(false);
            // return null;
        // }

        // debugger
        return (
            <div className='flashcard-form-top'>
                <form onSubmit={this.handleSubmit}>
                    <div className='flashcard-form'>
                        <input 
                            className='flashcard-form-title-input'
                            type="text"
                            value={this.state.title}
                            onChange={this.update('title')}
                        />
                        <br />
                        <textarea
                            className='flashcard-form-textarea'
                            cols="65"
                            rows="4"
                            value={this.state.text}
                            onChange={this.update("text")}
                        />
                        <input className='flashcard-form-submit'     type="submit" value="Edit card" />
                    </div>
                </form>
            </div>
        )
    }

}

export default withRouter(FlashcardForm);