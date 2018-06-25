import React from 'react';
import Feed from 'rss-to-json';
import scrollToComponent from 'react-scroll-to-component';

import FlashMessage from './flash_message/FlashMessage';
import Header from './header/Header';
import Jumbo from './jumbo/Jumbo';
import AboutPreview from './about_preview/AboutPreview';
import PortfolioPreview from './portfolio_preview/PortfolioPreview';
import ResumePreview from './resume_preview/ResumePreview';
import BlogPreview from './blog_preview/BlogPreview';
import ContactPreview from './contact_preview/ContactPreview';
import Footer from './footer/Footer';

import './welcome.css';

class Welcome extends React.Component {

  constructor(props) {
    super(props);
    this.home = React.createRef();
    this.about = React.createRef();
    this.projects = React.createRef();
    this.skills = React.createRef();
    this.blog = React.createRef();
    this.contact = React.createRef();
  }

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
    scrollToComponent(this[target].current, { align: 'top', offset: -110 });
  };

  render() {
    return (
      <div className="welcome_page">
        <div className="fixed_content">
          {this.state.latestBlogTitle && this.state.latestBlogLink ? (
            <FlashMessage
              title={this.state.latestBlogTitle}
              link={this.state.latestBlogLink}
            />
          ) : null}
          <Header handleScroll={this.handleScroll} />
        </div>
        <Jumbo ref={this.home} />
        <AboutPreview ref={this.about} />
        <PortfolioPreview ref={this.projects} />
        <ResumePreview ref={this.skills} />
        <BlogPreview ref={this.blog} />
        <ContactPreview ref={this.contact} />
        <Footer />
      </div>
    );
  }
}

export default Welcome;
