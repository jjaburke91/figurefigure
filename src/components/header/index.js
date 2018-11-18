import React from 'react';

import './_header.scss';

const HEADER_ITEMS = [
    {
        text: 'Latest Issue',
        href: '/',
    },
    {
        text: 'Archive',
        href: '/archive',
    },
    {
        text: 'About',
        href: '/about',
    },
    {
        text: 'Contact',
        href: '/contact',
    },

];

const Header = () => (
    <header className="header text-uppercase font-secondary">
        <nav>
            <ul className="header__nav">
                {HEADER_ITEMS.map((item, i)=> (
                    <li className="nav-item text-bold" key={`nav-item-${i}`}>
                       <a href={item.href}>{item.text}</a>
                    </li>
                ))}
            </ul>
        </nav>
    </header>
);

export default Header;
