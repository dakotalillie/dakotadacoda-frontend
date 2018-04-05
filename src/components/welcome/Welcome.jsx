import React from 'react';
import Feed from 'rss-to-json';
import scrollToComponent from 'react-scroll-to-component';
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

  handleScroll = target => {
    scrollToComponent(this[target], { align: 'top' });
  };

  render() {
    return (
      <div className="welcome_page">
        {this.state.latestBlogTitle && this.state.latestBlogLink ? (
          <FlashMessage
            title={this.state.latestBlogTitle}
            link={this.state.latestBlogLink}
          />
        ) : null}
        <Jumbo
          handleScroll={this.handleScroll}
          ref={section => {
            this.jumbo = section;
          }}
        />
        <AboutPreview
          ref={section => {
            this.about = section;
          }}
        />
        <PortfolioPreview
          ref={section => {
            this.portfolio = section;
          }}
        />
        <ResumePreview
          ref={section => {
            this.resume = section;
          }}
        />
        <BlogPreview
          ref={section => {
            this.blog = section;
          }}
        />
        <ContactPreview
          ref={section => {
            this.contact = section;
          }}
        />
        <Footer />
      </div>
    );
  }
}

export default Welcome;
