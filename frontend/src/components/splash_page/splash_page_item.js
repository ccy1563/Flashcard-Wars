import React from 'react';
import { Link } from 'react-router-dom';
import '../../stylesheets/splash.css';

const SplashPageItem = props => {

  const { deck } = props;
  return (
    <div className="splash-page-index-item">
      <Link to={`/decks/${deck._id}`}>
        <p>{deck.title}</p>
      </Link>
    </div>
  )
}

export default SplashPageItem;