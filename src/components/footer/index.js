import React from 'react';
import Icon from '../icon';
import Facebook from '../icon/facebook.icon';
import Instagram from '../icon/instagram.icon';
import Twitter from '../icon/twitter.icon';
import './_footer.scss';

const ICON_HEIGHT = 26;
const ICON_WIDTH = 26;
const ICON_COLOR = 'black';

const Footer = ({ issue }) => (
  <footer className="footer mt-auto py-3">
    <a href={issue.path}>
      <div className="bandef font-secondary">
        NEW! PDF N°{issue.number} — {issue.title.toUpperCase()}
      </div>
    </a>
  </footer>
);

export default Footer;
