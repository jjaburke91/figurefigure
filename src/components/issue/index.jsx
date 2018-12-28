import React from 'react';
import PropTypes from 'prop-types';
import { withPrefix } from "gatsby-link";

import './issue.scss';

const Issue = ({issue, isFullPage}) => {
    const fullPageClass = isFullPage ? "issue--full-height" : "";
    let bg = isFullPage && issue.bg_href
        ? <div className="cover" style={{backgroundImage: `linear-gradient(0, rgba(255,255,255,0.5), rgba(255,255,255,0.5)), url(${withPrefix(issue.bg_href)})`}} />
        : "" ;

    return (
        <article className={`issue ${fullPageClass}`}>
            {bg}
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
