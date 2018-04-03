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
            <NavbarBrand href="#">Logo</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="/">Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">About</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">Portfolio</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">Resume</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">Blog</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">Contact</NavLink>
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
