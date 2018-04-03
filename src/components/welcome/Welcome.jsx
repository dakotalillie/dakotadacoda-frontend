import React from 'react';
import FlashMessage from './flash_message/FlashMessage';
import Jumbo from './jumbo/Jumbo';
import AboutPreview from './about_preview/AboutPreview';
import PortfolioPreview from './portfolio_preview/PortfolioPreview';
import ResumePreview from './resume_preview/ResumePreview';
import BlogPreview from './blog_preview/BlogPreview';
import ContactPreview from './contact_preview/ContactPreview';

const Welcome = () => {
  return (
    <div className="welcome_page">
      <FlashMessage />
      <Jumbo />
      <AboutPreview />
      <PortfolioPreview />
      <ResumePreview />
      <BlogPreview />
      <ContactPreview />
    </div>
  );
};

export default Welcome;
