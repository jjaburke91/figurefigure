import React from 'react';
import Icon from '../icon';
import Facebook from '../icon/facebook.icon';
import Instagram from '../icon/instagram.icon';
import Twitter from '../icon/twitter.icon';
import './_footer.scss';

const ICON_HEIGHT = 26;
const ICON_WIDTH = 26;
const ICON_COLOR = 'black';

const Footer = ({issue}) => (
    <div className="row">
        <footer className="footer mt-auto py-3">
            <div className="bandef">
                <a href={issue.path}>NEW! PDF N°{issue.number} — {issue.title.toUpperCase()}</a>
            </div>
        </footer>
    </div>);

export default Footer;
