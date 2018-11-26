import React from 'react';
import PropTypes from 'prop-types';
import { withPrefix } from "gatsby-link";

import './issue.scss';

const Issue = ({issue, isFullPage}) => {
    const fullPageClass = isFullPage ? "issue--full-height" : "";
    return (
        <article className={`issue ${fullPageClass}`}>
            <a href={withPrefix(issue.path)} target="_blank">
                <img className="issue__img" src={withPrefix(issue.image_href)} alt={`Issue ${issue.title} link`}/>
            </a>
        </article>
    )
};

Issue.propTypes = {
    isFullPage: PropTypes.bool,
    issue: PropTypes.object.isRequired,
};

export default Issue;
