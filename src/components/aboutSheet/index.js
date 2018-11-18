import React from 'react';
import PropTypes from 'prop-types';

import './sheet.scss';

const AboutSheet = ({lines}) => (
    <div className="sheet">
        <h3 className="font-secondary text-uppercase text-bold">Figure Figure</h3>
        {lines.map((line, i) => (
            <div className="sheet-line" key={i}>
                <span className={"sheet-line__number text-bold font-secondary"}>{i+1} - </span>
                <span className={"sheet-line__text"}>
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
