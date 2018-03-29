import React from 'react';
import FlashMessage from './flash_message/FlashMessage';
import Header from './header/Header';
import Jumbo from './jumbo/Jumbo';
import AboutPreview from './about_preview/AboutPreview';
import PortfolioPreview from './portfolio_preview/PortfolioPreview';
import ResumePreview from './resume_preview/ResumePreview';
import BlogPreview from './blog_preview/BlogPreview';

const Welcome = () => {
  return (
    <div className="welcome_page">
      <FlashMessage />
      <Header />
      <Jumbo />
      <AboutPreview />
      <PortfolioPreview />
      <ResumePreview />
      <BlogPreview />
    </div>
  );
};

export default Welcome;
