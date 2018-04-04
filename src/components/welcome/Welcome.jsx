import React from 'react';
import Feed from 'rss-to-json';
import FlashMessage from './flash_message/FlashMessage';
import Jumbo from './jumbo/Jumbo';
import AboutPreview from './about_preview/AboutPreview';
import PortfolioPreview from './portfolio_preview/PortfolioPreview';
import ResumePreview from './resume_preview/ResumePreview';
import BlogPreview from './blog_preview/BlogPreview';
import ContactPreview from './contact_preview/ContactPreview';
import Footer from './footer/Footer';

class Welcome extends React.Component {
  state = {
    latestBlogTitle: '',
    latestBlogLink: ''
  };

  componentDidMount() {
    Feed.load(
      'https://cors-anywhere.herokuapp.com/https://medium.com/feed/@dakota.lillie',
      (err, rss) => {
        this.setState({
          latestBlogTitle: rss.items[0].title,
          latestBlogLink: rss.items[0].link
        });
      }
    );
  }

  render() {
    return (
      <div className="welcome_page">
        {this.state.latestBlogTitle && this.state.latestBlogLink ? (
          <FlashMessage
            title={this.state.latestBlogTitle}
            link={this.state.latestBlogLink}
          />
        ) : null}
        <Jumbo />
        <AboutPreview />
        <PortfolioPreview />
        <ResumePreview />
        <BlogPreview />
        <ContactPreview />
        <Footer />
      </div>
    );
  }
}

export default Welcome;
