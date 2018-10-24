import React from 'react';
import Feed from 'rss-to-json';

import FlashMessage from './flash_message/FlashMessage';
import Header from './header/Header';
import Jumbo from './jumbo/Jumbo';
import About from './about/About';
import Projects from './projects/Projects';
import Skills from './skills/Skills';
import Blog from './blog/Blog';
import Contact from './contact/Contact';
import Footer from './footer/Footer';

import './welcome.scss';

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
    latestBlogLink: '',
    flashOpen: false,
  };

  componentDidMount() {
    this.fetchLatestBlogPost();
  }

  fetchLatestBlogPost = () => {
    // Hacky solution for this problem: https://github.com/component/scroll-to/issues/9
    this.scrollToComponent = require('react-scroll-to-component');
    Feed.load(
      'https://cors-anywhere.herokuapp.com/https://medium.com/feed/@dakota.lillie',
      this.handleResponseFromMedium
    );
  }

  toggleFlash = () => {
    this.setState({ flashOpen: false });
  }

  handleResponseFromMedium = (err, rss) => {
    if (err) return;
    this.setState({
      latestBlogTitle: rss.items[0].title,
      latestBlogLink: rss.items[0].link,
      flashOpen: true,
    });
  }

  handleScroll = target => {
    const offset = this.state.flashOpen ? -113 : -65;
    this.scrollToComponent(this[target].current, { align: 'top', offset });
  };

  render() {
    const { latestBlogTitle, latestBlogLink, flashOpen } = this.state;
    return (
      <div className="welcome_page">
        <div className="fixed_content">
          <FlashMessage
            title={latestBlogTitle}
            link={latestBlogLink}
            flashOpen={flashOpen}
            toggleFlash = {this.toggleFlash}
          />
          <Header handleScroll={this.handleScroll} />
        </div>
        <React.StrictMode>
          <Jumbo ref={this.home} paddingTop={flashOpen ? 256 : 198} />
          <About ref={this.about} />
          <Projects ref={this.projects} />
          <Skills ref={this.skills} />
          <Blog ref={this.blog} />
          <Contact ref={this.contact} />
          <Footer />
        </React.StrictMode>     
      </div>
    );
  }
}

export default Welcome;
