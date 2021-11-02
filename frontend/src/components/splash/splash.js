import React from 'react';
import { withRouter } from 'react-router-dom';
import '../../stylesheets/splash.css';

class Splash extends React.Component{
  render(){
    var github = require('../../images/github.png');
    var linkedin = require('../../images/linkedin.png');
    var portfolio = require('../../images/portfolio.png');

    return(
      <div className="splash-page">
        <h1>Slipper</h1>

        <div>
          <p>Don't just memorize,</p>
          <p>Type and Memorize</p>
        </div>

        <p>Active learning should be more than just memorizing. Why not make it more "active". 
        Improve your typing speed while memorizing key information at the same time.</p>

        <p>Our goal is to create an app that further expands on memorizing information.</p>
        <p>Create your own deck of flashcards</p>
        <p>Save decks created from other users.</p>
        <p>Practice typing while also memorizing your knowledge.</p>
        <p>Leaderboard to see how much you improved in speed.</p>


        <h2>Team</h2>
        <div className="team-container">
          <div className="profile-container">
            <span>Christopher Chung</span>
            <div className="link-button">
              <a href="https://www.linkedin.com/in/chris-c-160950221/">
                <img className="linkedin-icon" src={linkedin.default} alt="linkedin"/>
              </a>
              <a href="https://github.com/ccy1563">
                <img className="github-icon" src={github.default} alt="github"/>
              </a>
              <a href="https://ccy1563.github.io/Portfolio/">
                <img className="portfolio-icon" src={portfolio.default} alt="portfolio"/>
              </a>
            </div>
          </div>

          <div className="profile-container">
            <span>Sunny Mei</span>
            <div className="link-button">
              <a href="https://www.linkedin.com/in/sunny-mei-534677153/">
                <img className="linkedin-icon" src={linkedin.default} alt="linkedin"/>
              </a>
              <a href="https://github.com/sunmeiappprep">
                <img className="github-icon" src={github.default} alt="github"/>
              </a>
              <a href="https://github.com/sunmeiappprep">
                <img className="portfolio-icon" src={portfolio.default} alt="portfolio"/>
              </a>
            </div>
          </div>

          <div className="profile-container">
            <span>Kevin Lin</span>
            <div className="link-button">
              <a href="https://www.linkedin.com/in/kevin-lin-0a0aa31b1/">
                <img className="linkedin-icon" src={linkedin.default} alt="linkedin"/>
              </a>
              <a href="https://github.com/KevLin2358?tab=repositories">
                <img className="github-icon" src={github.default} alt="github"/>
              </a>
              <a href="https://github.com/KevLin2358?tab=repositories">
                <img className="portfolio-icon" src={portfolio.default} alt="portfolio"/>
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Splash);