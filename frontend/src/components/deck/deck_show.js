import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import CommentIndexItem from '../comment/comment_index_item';
import CommentFormContainer from '../comment/comment_form_container';
import '../../stylesheets/deck_show.css'
class DeckShow extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      commentArray: [],
      flashcardArray: [],
      deckTitle: {}
    }

    this.textEdited = React.createRef();
  }

  componentDidMount(){
    // this.setState({deckTitle: })
    this.props.fetchDeck(this.props.DeckId);

    this.props.fetchDeckComments(this.props.deckId)
      .then( res => {
        this.setState({
          commentArray: Object.values(res.comments.data)
        })
      })

    this.props.fetchDeckFlashcards(this.props.deckId)
      .then(res => {
        this.setState({
          flashcardArray: Object.values(res.flashcards.data)
        })
      })
    this.props.fetchDeck(this.props.DeckId);  
    // debugger
  }

  handleSave(e) {
    e.preventDefault();
    // debugger
    let currDeck = this.props.decks[0]
    let deck = {
      leaderboard: currDeck.leaderboard,
      title: currDeck.title,
      user: this.props.user_id
    };
    this.props.composeDeck(deck);
    this.props.fetchUserDecks(this.props.user_id);
    // debugger
    // this.state.flashcardArray.forEach(flashcard => {
    //   // create flashcard and call create
    //   let flashcard = {
    //     deck: this.props.
    //   }
    //   this.props.createFlashcard(flashcard)
    // })

    // comments.forEach(comment => {
    //   nextState[comment._id] = comment
    // })

  }

  render(){
    // debugger
    const { commentArray, flashcardArray } = this.state;
    const { fetchComment, fetchDeckComments, createComment, updateComment, deleteComment, user_id, deckId} = this.props

    const allCommentsInDeck = commentArray.map(comment => {
      return(
        <CommentIndexItem 
          comment = {comment}
          fetchDeckComments = {fetchDeckComments}
          createComment = {createComment}
          updateComment = {updateComment}
          deleteComment = {deleteComment}
          fetchComment = {fetchComment}
          user_id = {user_id}
          key={comment._id}
          deckId = {deckId}
        />
      )
    });
    
    const allFlashcardsInDeck = flashcardArray.map(flashcard => {
      // debugger
      return (
        <div className="deck-show-flashcard"key={flashcard._id}>
          <div className="deck-show-flashcard-title"> {flashcard.title}</div>
          <div className="deck-show-flashcard-text">{flashcard.text}</div>
        </div>
      )
    });

    return(
      <div className="deck-show-container">
        <Link to={`/practice/deck/${deckId}`}>
          <button className ="">
              Practice Typing
          </button>
        </Link>
        <div className="deck-show-render-flashcard">
          <div className="deck-show-header">Flashcards</div>
          { allFlashcardsInDeck }
        </div>

        <div>
          <button onClick={(e) => this.handleSave(e)}>Save Deck</button>
        </div>

        <div>
          <div className="deck-show-header">Comments</div>
          <div>
            <CommentFormContainer 
              deckId = {deckId}
            />
          </div>
          { allCommentsInDeck }
        </div>

      </div>
    )
  }
}

export default withRouter(DeckShow);