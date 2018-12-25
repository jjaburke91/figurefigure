import React from 'react';
import PropTypes from 'prop-types';
import Slider from "react-slick";
import { withPrefix } from "gatsby-link";

import "slick-carousel/slick/slick.scss"; 
import "slick-carousel/slick/slick-theme.scss";
import './homepage_issue.scss';

const HomepageIssue = ({issues}) => {
    const items = [];
    
    const settings = {
        dots: false,
        infinite: true,
        speed: 250,
        slidesToShow: 5,
        slidesToScroll: 5
    };
    console.log(issues)
    issues.sort((a, b) => b.number - a.number).map((issue, i) => {
        const p = issue.pages;
        if (p) {
            Array.from(Array(p.count).keys()).map((value, index) => {
                items.push(<img key={(p.first + index)} style={{padding: 8}} src={withPrefix(p.prefix + (p.first + index) + p.sufix)} alt={`Issue ${issue.title} link`}/>)
            })
        }
    })
    return (
        <article className={`issue--full-height`}>
            <Slider {...settings}>
                {items}
            </Slider>
        </article>
    )
};

HomepageIssue.propTypes = {
    issues: PropTypes.array.isRequired,
};

export default HomepageIssue;
