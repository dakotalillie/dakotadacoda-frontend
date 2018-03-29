import React from 'react';
import FlashMessage from './flash_message/FlashMessage';
import Header from './header/Header';
import Jumbo from './jumbo/Jumbo';
import AboutPreview from './about_preview/AboutPreview';

const Welcome = () => {
  return (
    <div>
      <FlashMessage />
      <Header />
      <Jumbo />
      <AboutPreview />
    </div>
  );
};

export default Welcome;
