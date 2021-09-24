import React from 'react';


class CommentIndexItem extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      editable: false
    }

    this.textEdited = React.createRef();

    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
  }

  handleEdit(e){
    e.preventDefault();
    // debugger
    const { comment, user_id, deckId } = this.props;
    let editText;
  
    if(this.state.editable){
      editText = this.textEdited.current.value;
    }

    this.setState({editable: !this.state.editable})

    let editedComment = { 
      id: comment._id, user: user_id, text: editText, deck: deckId 
    };

    this.props.updateComment(editedComment)
    window.location.reload(false);
  }

  handleDelete(e){
    e.preventDefault(e);
    console.log(this.props)
    this.props.deleteComment(this.props.comment._id)
    window.location.reload(false);
  }

  toggleEdit(){
    this.setState({editable: !this.state.editable})
  }

  render(){
    // console.log(this.props)
    const { editable } = this.state;
    const { comment, user_id } = this.props;

    const uploader_id = comment.user;
    const isUploader = (user_id === uploader_id);
 
    let editButton;
    let submitButton;
    
    if (isUploader) {
      editButton = (
        <div className="edit-photo-button-container">
          <button className="edit-photo-button" onClick={this.toggleEdit}>Edit</button>
        </div>
      )
      submitButton = (
        <div className="edit-photo-button-container">
          <button className="edit-photo-button" onClick={this.handleEdit}>Submit</button>
        </div>
      )
    };

    return(
      <div className="comment-index-item-container">
        <div>
          {editable ? 
            <div className="text-edited-container">
              <textarea 
                className="text-edited" 
                type='text' 
                ref={this.textEdited} 
                defaultValue={comment ? comment.text : ""} 
              /> 
            </div>
            : 
            <h1 className="text-not-edit">
              {comment ? comment.text : ""}
            </h1>
          }

        </div>

        <div className="comment-index-button">
          {editable === false ? editButton : submitButton }
      
          {
            isUploader ?
            <div className="delete-comment-container">
              <button className="delete-comment-button" onClick={this.handleDelete}>Delete</button> 
            </div>
            :
            ""
          }
        </div>
      </div>
    )
  }
}

export default CommentIndexItem;