import React from 'react';

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
                        <a href={item.path}>{item.text}</a>
                    </li>
                ))}
            </ul>
        </nav>
    </header>
);

export default Header;
