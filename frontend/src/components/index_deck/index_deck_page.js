import React from 'react';
import { withRouter } from 'react-router-dom';
import IndexDeckPageItem from './index_deck_page_item';

class IndexDeckPage extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      deckArray: []
    }
  }

  componentDidMount(){
    this.props.fetchAllDecks()
    .then(res => {
      this.setState({
        deckArray: Object.values(res.decks.data)
      })
    })
  }

  render(){
    const { deckArray } = this.state
    return(

      <div className="index-page-container">
        <div className="index-deck-index">
          {
            deckArray.map(deck => (
              <IndexDeckPageItem 
                deck = {deck}
                key = {deck._id}
              />
            ))
          }
        </div>
      </div>
    )
  }
}

export default withRouter(IndexDeckPage);