import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Link from 'gatsby-link';

import './_header.scss';

const HEADER_ITEMS = [
  {
    text: 'ARCHIVES',
    path: '/archive',
  },
  {
    text: 'ÉVÈNEMENTS',
    path: '/events',
  },
  {
    text: 'À PROPOS',
    path: '/about',
  },
];

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navExpanded: false,
    };
    this.closeNav = this.closeNav.bind(this);
    this.setNavExpanded = this.setNavExpanded.bind(this);
  }

  setNavExpanded(expanded) {
    this.setState({ navExpanded: expanded });
  }

  closeNav() {
    this.setState({ navExpanded: false });
  }

  render() {
    const { navExpanded } = this.state;
    return (
      <header className="header font-secondary">
        <Navbar bg="light" expand="md" onToggle={this.setNavExpanded} expanded={navExpanded}>
          <Link id="sitename" to="/" className="navbar-brand">FIGURE FIGURE</Link>
          <Navbar.Toggle aria-controls="navbarToggler" />
          <Navbar.Collapse id="navbarToggler">
            <ul className="navbar-nav nav-fill w-100">
              {HEADER_ITEMS.map((item, i) => (
                <li className="nav-item" key={`nav-item-${i}`}>
                  <Link onClick={this.closeNav} className="nav-link" to={item.path}>{item.text}</Link>
                </li>
              ))}
            </ul>
          </Navbar.Collapse>
        </Navbar>
      </header>
    );
  }
}

export default Header;
