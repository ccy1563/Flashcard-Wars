import React from 'react';
import { Link } from 'react-router-dom';

const SplashPageItem = props => {

  const { deck } = props;
  return (
    <div>
      <Link to={`/decks/${deck._id}`}>
        <p>{deck.title}</p>
      </Link>
    </div>
  )
}

export default SplashPageItem;