import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import CommentIndexItem from '../comment/comment_index_item';
import '../../stylesheets/deck_show.css'
class DeckShow extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      commentArray: [],
      flashcardArray: []
    }

    this.textEdited = React.createRef();
  }

  componentDidMount(){
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
  }

  render(){
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
          <div className="deck-show-header">Comments</div>
          { allCommentsInDeck }
        </div>
      </div>
    )
  }
}

export default withRouter(DeckShow);