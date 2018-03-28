import React from 'react';
import FlashMessage from './flash_message/FlashMessage';
import Header from './header/Header';

const Welcome = () => {
  return (
    <div>
      <FlashMessage />
      <Header />
    </div>
  );
};

export default Welcome;
