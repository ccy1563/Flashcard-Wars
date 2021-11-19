import React, { Component } from 'react'
import '../../stylesheets/footer.css';
export default class Footer extends Component {
  render() {
    var github = require('../../images/github.png');
    var linkedin = require('../../images/linkedin.png');
    var portfolio = require('../../images/portfolio.png');
    return (
      <div className="team">
        <div className="team-container">
          <div className="profile-container">
            <span className='three-muskateers'>Christopher Chung</span>
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
            <span className='three-muskateers'>Sunny Mei</span>
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
            <span className='three-muskateers'>Kevin Lin</span>
            <div className="link-button">
              <a href="https://www.linkedin.com/in/kevin-lin-0a0aa31b1/" target="_blank" rel="noreferrer">
                <img className="linkedin-icon" src={linkedin.default} alt="linkedin"/>
              </a>
              <a href="https://github.com/KevLin2358?tab=repositories" target="_blank" rel="noreferrer">
                <img className="github-icon" src={github.default} alt="github"/>
              </a>
              <a href="https://github.com/KevLin2358?tab=repositories" target='_blank' rel='noreferrer'>
                <img className="portfolio-icon" src={portfolio.default} alt="portfolio"/>
              </a>
            </div>
          </div>

      </div>
    </div>
    )
  }
}
