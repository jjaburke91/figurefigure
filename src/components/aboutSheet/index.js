import React from 'react';
import PropTypes from 'prop-types';
import { withPrefix } from "gatsby-link";

import './sheet.scss';

const AboutSheet = ({lines}) => (
    <div className="sheet sheet-bg" >
        <h1 className="sheet_header font-secondary text-uppercase text-bold">Figure Figure</h1>
        {lines.map((line, i) => (
            <div className="sheet-line" key={i}>
                <span className={"sheet-line__number text-bold font-secondary"}>{i+1} - </span>
                <span className={"sheet-line__text font-tertiary"}>
                    {line}
                </span>
            </div>
        ))}
    </div>
);

AboutSheet.propTypes = {
    lines: PropTypes.array.isRequired,
};

export default AboutSheet;
