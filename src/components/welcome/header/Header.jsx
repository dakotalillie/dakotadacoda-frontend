import React from 'react';
import {
  Collapse,
  Container,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink
} from 'reactstrap';
import PropTypes from 'prop-types';

import Logo from './logo/Logo';
import './header.scss';

class Header extends React.Component {

  static propTypes = {
    handleScroll: PropTypes.func.isRequired
  };

  state = {
    isOpen: false
  };

  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    const sections = ['Home', 'About', 'Projects', 'Skills', 'Blog', 'Contact'];
    return (
      <div className="header">
        <Container>
          <Navbar color="faded" dark expand="md">
            <NavbarBrand onClick={() => this.props.handleScroll('home')}>
              <Logo />
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                {sections.map(name => (
                  <NavItem key={name}>
                    <NavLink
                      id={`${name.toLowerCase()}_nav_link`}
                      onClick={() => (
                        this.props.handleScroll(name.toLowerCase())
                      )}
                    >
                      {name}
                    </NavLink>
                  </NavItem>
                ))}
              </Nav>
            </Collapse>
          </Navbar>
        </Container>
      </div>
    );
  }
}

export default Header;
