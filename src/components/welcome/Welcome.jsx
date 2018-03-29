import React from 'react';
import FlashMessage from './flash_message/FlashMessage';
import Header from './header/Header';
import Jumbo from './jumbo/Jumbo';
import AboutPreview from './about_preview/AboutPreview';
import PortfolioPreview from './portfolio_preview/PortfolioPreview';

const Welcome = () => {
  return (
    <div>
      <FlashMessage />
      <Header />
      <Jumbo />
      <AboutPreview />
      <PortfolioPreview />
    </div>
  );
};

export default Welcome;
