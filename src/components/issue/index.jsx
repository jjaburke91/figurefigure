import React from 'react';
import PropTypes from 'prop-types';
import { withPrefix } from 'gatsby-link';

import './issue.scss';

const monthNames = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];

const Issue = ({ issue }) => {
  const d = new Date(issue.date_of_issue);
  const formatedDate = `${monthNames[d.getUTCMonth()]} ${d.getFullYear()}`;
  return (
    <article className="issue">
      <a href={withPrefix(issue.path)} target="_blank">
        N°{issue.number} — {formatedDate}
        <br />
        {issue.title.toUpperCase()}
      </a>
    </article>
  );
};

Issue.propTypes = {
  issue: PropTypes.shape({
    number: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    date_of_issue: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
  }).isRequired,
};

export default Issue;
