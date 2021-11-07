import React from 'react';
import { Link } from 'react-router-dom';
import '../../stylesheets/index_deck.css';
const IndexDeckPageItem = props => {

  const { deck } = props;
  return (
    <div className="index-page-index-item">
      <Link to={`/decks/${deck._id}`}>
        <p>{deck.title}</p>
      </Link>
    </div>
  )
}

export default IndexDeckPageItem;