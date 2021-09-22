import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import CommentIndexItem from '../comment/comment_index_item';

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
        <div key={flashcard._id}>
          <div>Title {flashcard.title}</div>
          <div>Text {flashcard.text}</div>
        </div>
      )
    });

    return(
      <div>
        <Link to={`/practice/deck/${deckId}`}>
          <button>
              Practice Typing
          </button>
        </Link>
        <div>
          <h3>Flashcards</h3>
          { allFlashcardsInDeck }
        </div>
        <div>
          <h3>Comments</h3>
          { allCommentsInDeck }
        </div>

      </div>
    )
  }
}

export default withRouter(DeckShow);