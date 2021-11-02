import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import '../../stylesheets/splash.css';

class Splash extends React.Component{

  open(url){
    window.open(url, "_blank");
  }
  
  render(){
    var github = require('../../images/github.png');
    var linkedin = require('../../images/linkedin.png');
    var portfolio = require('../../images/portfolio.png');

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

        <div className="team">
          <h2 className="team-header">Team</h2>
            <div className="team-container">
              <div className="profile-container">
                <span>Christopher Chung</span>
                <div className="link-button">
                  <a href="https://www.linkedin.com/in/chris-c-160950221/" target="_blank" rel="noreferrer">
                    <img className="linkedin-icon" src={linkedin.default} alt="linkedin"/>
                  </a>
                  <a href="https://github.com/ccy1563" target="_blank" rel="noreferrer">
                    <img className="github-icon" src={github.default} alt="github"/>
                  </a>
                  <a href="https://ccy1563.github.io/Portfolio/" target="_blank" rel="noreferrer">
                    <img className="portfolio-icon" src={portfolio.default} alt="portfolio"/>
                  </a>
                </div>
              </div>

              <div className="profile-container">
                <span>Sunny Mei</span>
                <div className="link-button">
                  <a href="https://www.linkedin.com/in/sunny-mei-534677153/" target="_blank" rel="noreferrer">
                    <img className="linkedin-icon" src={linkedin.default} alt="linkedin"/>
                  </a>
                  <a href="https://github.com/sunmeiappprep" target="_blank" rel="noreferrer">
                    <img className="github-icon" src={github.default} alt="github"/>
                  </a>
                  <a href="https://github.com/sunmeiappprep" target="_blank" rel="noreferrer">
                    <img className="portfolio-icon" src={portfolio.default} alt="portfolio"/>
                  </a>
                </div>
              </div>

              <div className="profile-container">
                <span>Kevin Lin</span>
                <div className="link-button">
                  <a href="https://www.linkedin.com/in/kevin-lin-0a0aa31b1/" target="_blank" rel="noreferrer">
                    <img className="linkedin-icon" src={linkedin.default} alt="linkedin"/>
                  </a>
                  <a href="https://github.com/KevLin2358?tab=repositories" target="_blank" rel="noreferrer">
                    <img className="github-icon" src={github.default} alt="github"/>
                  </a>
                  <a href="https://github.com/KevLin2358?tab=repositories" >
                    <img className="portfolio-icon" src={portfolio.default} alt="portfolio"/>
                  </a>
                </div>
              </div>
            </div>
          </div>
      </div>
    )
  }
}

export default withRouter(Splash);