import React from 'react';
import Link from 'gatsby-link';

import './_header.scss';

const HEADER_ITEMS = [
    {
        text: 'ARCHIVES',
        path: '/archive',
    },
    {
        text: 'ÉVÈNEMENTS',
        path: '/contact',
    },
    {
        text: 'À PROPOS',
        path: '/about',
    }
];

const Header = () => (
    <header className="row header font-secondary">
        <nav className="navContainer col-12">
            <div className="nav-item" id="sitename">
                <Link to="/">FIGURE FIGURE</Link>
            </div>
            <ul className="header__nav">
                {HEADER_ITEMS.map((item, i)=> (
                    <li className="nav-item" key={`nav-item-${i}`}>
                        <Link to={item.path} >{item.text}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    </header>
);

export default Header;
