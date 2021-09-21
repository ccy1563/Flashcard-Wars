import React from 'react';

const SplashPageItem = props => {

  const { deck } = props;
  return (
    <div>
      <h1>{deck.title}</h1>
    </div>
  )
}

export default SplashPageItem;