import React from 'react';
import { withRouter } from 'react-router-dom';
import SplashPageItem from './splash_page_item';

class SplashPage extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      deckArray: []
    }
  }

  componentDidMount(){
    this.props.fetchAllDecks()
    .then(res => {
      // console.log("this is res: ",res)
      this.setState({
        deckArray: Object.values(res.decks.data)
      })
      // console.log("this is deckArray", this.state.deckArray)
    })
  }

  render(){
    const { deckArray } = this.state
    // console.log(this.props)
    // if(decks.length === 0){
    //   return null
    // }
    return(
      <div>
        <div className="splash-deck-index">
          {
            deckArray.map(deck => (
              <SplashPageItem 
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

export default withRouter(SplashPage);