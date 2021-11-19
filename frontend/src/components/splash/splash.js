import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import '../../stylesheets/splash.css';


class Splash extends React.Component{
  
  render(){
    var flashcard_img = require('../../images/flashcard_frontpage.png');
    return(
      <div className="splash-page">

        <div className='splash-head'>
          <div className="splash-header-1">
            <div className="header-1-para">
              <p className='front-page-motto'>Don't just memorize,</p>
              <p className='front-page-motto'>Type and Memorize</p>
            </div>
            <p className="header-1-para-2">Active learning should be more than just memorizing. Why not make it more "active".
              Improve your typing speed while memorizing key information at the same time.</p>

          </div>
          <div className='flashcard-frontpage-icon-container'>
            <img className="flashcard-frontpage-icon" src={flashcard_img.default} alt="flashcard-frontpage" />
          </div>
        </div>

        <div className="splash-header-2">
          <h1>Our goal is to create an app that further expands on memorizing information.</h1>
          <ul className="splash-header-2-ul">
            <li>Create your own deck of flashcards</li>
            <li>Save decks created from other users.</li>
            <li>Practice typing while also memorizing your knowledge.</li>
            <li>Leaderboard to see how much you improved in speed.</li>
          </ul>
        </div>
      </div>
    )
  }
}

export default withRouter(Splash);