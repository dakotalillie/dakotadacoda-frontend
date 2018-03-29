import React from 'react';
import FlashMessage from './flash_message/FlashMessage';
import Header from './header/Header';
import Jumbo from './jumbo/Jumbo';
import AboutPreview from './about_preview/AboutPreview';
import PortfolioPreview from './portfolio_preview/PortfolioPreview';
import ResumePreview from './resume_preview/ResumePreview';

const Welcome = () => {
  return (
    <div>
      <FlashMessage />
      <Header />
      <Jumbo />
      <AboutPreview />
      <PortfolioPreview />
      <ResumePreview />
    </div>
  );
};

export default Welcome;
