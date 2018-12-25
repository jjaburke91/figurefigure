import React from 'react';
import Link from 'gatsby-link';

import './_header.scss';

const HEADER_ITEMS = [
    {
        text: 'publication',
        path: '/',
    },
    {
        text: 'archives',
        path: '/archive',
    },
    {
        text: 'à propos',
        path: '/about',
    },
    {
        text: 'contact',
        path: '/contact',
    },
];

const Header = () => (
    <header className="header font-secondary">
        <nav>
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
