import React from 'react';
import Link from 'gatsby-link';

import './_header.scss';

const HEADER_ITEMS = [
    {
        text: 'Latest Issue',
        path: '/',
    },
    {
        text: 'Archive',
        path: '/archive',
    },
    {
        text: 'About',
        path: '/about',
    },
    {
        text: 'Contact',
        path: '/contact',
    },
];

const Header = () => (
    <header className="header text-uppercase font-secondary">
        <nav>
            <ul className="header__nav">
                {HEADER_ITEMS.map((item, i)=> (
                    <li className="nav-item text-bold" key={`nav-item-${i}`}>
                        <Link to={item.path} >{item.text}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    </header>
);

export default Header;
