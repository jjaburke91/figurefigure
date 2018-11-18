import React from 'react';
import PropTypes from 'prop-types';

import './issue.scss';

const Issue = ({issue, isFullPage}) => {
    const fullPageClass = isFullPage ? "issue--full-height" : "";
    return (
        <div className={`issue ${fullPageClass}`}>
            <a href={issue.path} target="_blank">
                <img className="issue__img" src={issue.image_href} />
            </a>
        </div>
    )
};

Issue.propTypes = {
    isFullPage: PropTypes.bool,
    issue: PropTypes.object.isRequired,
};

export default Issue;
