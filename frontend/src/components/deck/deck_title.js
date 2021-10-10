import React from 'react';
import { withRouter, Redirect } from 'react-router-dom';

class DeckTitle extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      editable: false,
      
    };
    this.titleEdited = React.createRef();
    this.handleTitleEdit = this.handleTitleEdit.bind(this);
  }

  componentDidMount() {
    
  }

  handleTitleEdit(e){
    e.preventDefault();

    let editTitle = this.titleEdited.current.value;
    
    let editedDeck = {
      id: this.props.deckId,
      user: this.props.user_id,
      title: editTitle
    }
    console.log(editedDeck)
    this.props.reviseDeck(editedDeck);

  }

  render(){
    // debugger

    return(
      <div>
        <form onSubmit={this.handleTitleEdit}>
          <div>
            <input className='user-profile-create-deck-text-box' type="text"
              ref = {this.titleEdited}

            />
            <br />
            <input className='user-profile-create-deck-button' type="submit" value="Revise Title" />
          </div>
        </form>
      </div>
    )
  }
}

export default withRouter(DeckTitle);