import React from 'react';
import './_footer.scss';

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
