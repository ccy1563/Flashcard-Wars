import React from 'react';
import { withRouter } from 'react-router-dom';
import '../../stylesheets/splash.css';

class Splash extends React.Component{
  render(){
    return(
      <div className="splash-page">
        <h1>Slipper</h1>
        <p>Create your own deck of flashcards</p>
        <p>Practice typing while also memorizing your knowledge.</p>

      </div>
    )
  }
}

export default withRouter(Splash);