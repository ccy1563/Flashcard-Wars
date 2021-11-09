import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import '../../stylesheets/splash.css';

class Splash extends React.Component{

  render(){
    return(
      <div className="splash-page">

        <div className="splash-header-1">
          <div className="header-1-para">
            <p>Don't just memorize,</p>
            <p>Type and Memorize</p>
          </div>
          <p className="header-1-para-2">Active learning should be more than just memorizing. Why not make it more "active". 
          Improve your typing speed while memorizing key information at the same time.</p>

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