import React from 'react';
import PropTypes from 'prop-types';
import Slider from "react-slick";
import { withPrefix } from "gatsby-link";

import "slick-carousel/slick/slick.scss"; 
import "slick-carousel/slick/slick-theme.scss";
import './homepage_issue.scss';

const getShareUri = (issue) => {
    const path = 'https://figurefigure.fr/#!publication/' + issue.number;
    return 'https://facebook.com/sharer.php?u=' + encodeURIComponent(path);
}

const setIssuePage = (issue) => {
    window.location.hash = "#!publication/" + issue.number;
    document.getElementById("download").href = withPrefix(issue.path);
    document.getElementById("share").href = getShareUri(issue);
}

const HomepageIssue = ({issues}) => {
    const items = [];
    const itemIssue = [];
    const latestIssue = issues && issues[issues.length -1];

    const splits = document.location.hash.substring(1).split('?');
	const psplits = splits[0].split('/');
    const currentNumber = psplits.length > 1 ? Number(psplits[1]) : latestIssue.number;
    let firstPage = 0;
    let currentIssue;

    issues.sort((a, b) => b.number - a.number).map((issue, i) => {
        const p = issue.pages;
        if (p) {
            Array.from(Array(p.count).keys()).map((value, index) => {
                itemIssue.push(issue);
                items.push(<img key={(p.first + index)} style={{padding: 8}} src={withPrefix(p.prefix + (p.first + index) + p.sufix)} alt={`Issue ${issue.title} link`}/>)
            })
        }
    })
    for (let i =0; i<itemIssue.length; i++)
        if (itemIssue[i].number === currentNumber) {
            firstPage = i;
            currentIssue = itemIssue[i];
            break
        }

    const settings = {
        dots: false,
        infinite: true,
        speed: 250,
        slidesToShow: 5,
        slidesToScroll: 5,
        arrows: false,
        appendDots: false,
        autoplay: true,
        autoplaySpeed: 10000,
        lazyLoad: 'progressive',
        initialSlide: firstPage,
        afterChange: i => setIssuePage(itemIssue[i])
    };
    return (
        <article className={`issue--full-height`}>
            <Slider {...settings}>
                {items}
            </Slider>
            <div className={`text-center footer`}>
                <div className={`footer-content`}>
                    <a id="download" href={withPrefix(currentIssue.path)}>Télécharger</a> | <a id="share" target="_blank" href={getShareUri(currentIssue)}>Partager</a>
                </div>
            </div>
        </article>
    )
};

HomepageIssue.propTypes = {
    issues: PropTypes.array.isRequired,
};

export default HomepageIssue;
