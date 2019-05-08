import React from 'react';
import PropTypes from 'prop-types';
import { withPrefix } from "gatsby-link";

import './issue.scss';

const monthNames = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];

const Issue = ({issue}) => {

    const d = new Date(issue.date_of_issue);
    const formatedDate = monthNames[d.getUTCMonth()] + " " + d.getFullYear();

    /*const fullPageClass = isFullPage ? "issue--full-height" : "";
    let bg = isFullPage && issue.bg_href
        ? <div className="cover" style={{backgroundImage: `linear-gradient(0, rgba(255,255,255,0.5), rgba(255,255,255,0.5)), url(${withPrefix(issue.bg_href)})`}} />
        : "" ;*/

        //                <img className="issue__img" src={withPrefix(issue.image_href)} alt={`Issue ${issue.title} link`}/>

    return (
        <article className={`issue`}>
            <a href={withPrefix(issue.path)} target="_blank">
                + N°{issue.number} — {formatedDate}
                <br/> 
                {issue.title.toUpperCase()}
            </a>
        </article>
    )
};

Issue.propTypes = {
    //isFullPage: PropTypes.bool,
    issue: PropTypes.object.isRequired,
};

export default Issue;
