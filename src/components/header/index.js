import React from 'react';
import Link from 'gatsby-link';
import 'bootstrap/js/dist/collapse';

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

const Header = () => (
  <header className="header font-secondary">
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="navbar-brand" id="sitename">
        <Link to="/">FIGURE FIGURE</Link>
      </div>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Menu">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarToggler">
        <ul className="navbar-nav nav-fill w-100">
          {HEADER_ITEMS.map((item, i) => (
            <li className="nav-item" key={`nav-item-${i}`}>
              <Link className="nav-link" to={item.path}>{item.text}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  </header>
);

export default Header;
