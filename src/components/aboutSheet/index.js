import React from 'react';
import PropTypes from 'prop-types';
import { withPrefix } from 'gatsby-link';

import './sheet.scss';

const AboutSheet = ({ lines }) => (
  <div className="sheet sheet-bg">
    {lines.map((line, i) => (
      <div className="sheet-line" key={i}>
        <span className="sheet-line__text" dangerouslySetInnerHTML={{ __html: line }} />
      </div>
    ))}
  </div>
);

AboutSheet.propTypes = {
  lines: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default AboutSheet;
