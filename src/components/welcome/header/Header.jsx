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
import './header.css';

class Header extends React.Component {
  state = {
    isOpen: false
  };

  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <div className="header">
        <Container>
          <Navbar color="faded" dark expand="md">
            <NavbarBrand onClick={() => this.props.handleScroll('jumbo')}>
              <Logo />
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink onClick={() => this.props.handleScroll('jumbo')}>
                    Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink onClick={() => this.props.handleScroll('about')}>
                    About
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink onClick={() => this.props.handleScroll('portfolio')}>
                    Projects
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink onClick={() => this.props.handleScroll('resume')}>
                    Proficiencies
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink onClick={() => this.props.handleScroll('blog')}>
                    Blog
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink onClick={() => this.props.handleScroll('contact')}>
                    Contact
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </Container>
      </div>
    );
  }
}

export default Header;

Header.propTypes = {
  handleScroll: PropTypes.func.isRequired
};
