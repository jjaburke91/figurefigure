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
const monthNames = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];

class HomepageIssue extends React.Component {
    constructor(props) {
        super(props);
        // create a ref to store the textInput DOM element
        this.download = React.createRef();
        this.share = React.createRef();
        this.items = [];
        this.homepage = props.homepage;

        this.itemIssue = [];
        const latestIssue = props.issues && props.issues[props.issues.length -1];
        const splits = document.location.hash.substring(1).split('?');
        const psplits = splits[0].split('/');
        const currentNumber = psplits.length > 1 ? Number(psplits[1]) : latestIssue.number;
        this.firstPage = 0;
        this.currentIssue = latestIssue;
    
        props.issues.sort((a, b) => b.number - a.number).map((issue, i) => {
            const p = issue.pages;
            if (p) {
                Array.from(Array(p.count).keys()).map((value, index) => {
                    this.itemIssue.push(issue);
                    this.items.push(<img key={(p.first + index)} style={{padding: 8}} src={withPrefix(p.prefix + (p.first + index) + p.sufix)} alt={`Issue ${issue.title} link`}/>)
                })
            }
        })
    
        for (let i =0; i<this.itemIssue.length; i++)
            if (this.itemIssue[i].number === currentNumber) {
                this.firstPage = i;
                this.currentIssue = this.itemIssue[i];
                break
            }
    }
    
    setIssuePage(issue){
        if (!issue)
            return;
        window.location.hash = "#!publication/" + issue.number;
        this.download.current.href = withPrefix(issue.path);
        this.share.current.href = getShareUri(issue);
    }

    render() {
        const settings = {
            dots: false,
            infinite: this.homepage,
            speed: 250,
            slidesToShow: this.homepage ? 5 : 15,
            slidesToScroll: this.homepage ? 5 : 15,
            arrows: false,
            appendDots: false,
            initialSlide: this.firstPage,
            afterChange: i => this.setIssuePage(this.itemIssue[i])
        };
        const className = this.homepage ? 'issue--full-height' : '';
        const footerClassName = 'footer-content ' + (this.homepage ? 'footer-homepage' : '');

        const d = new Date(this.currentIssue.date_of_issue);
        const footerDate = this.homepage ? '' : <p>Numéro {this.currentIssue.number} – {monthNames[d.getUTCMonth()]} {d.getFullYear()}</p>;
        const footerTitle = this.homepage ? '' : <p>{this.currentIssue.title}</p>;

        return (
            <article className={className}>
                <Slider {...settings}>
                    {this.items}
                </Slider>
                <div className={`text-center footer`}>
                    <div className={footerClassName}>
                        {footerDate}
                        {footerTitle}
                        <a id="download" ref={this.download} href={withPrefix(this.currentIssue.path)}>Télécharger</a> | <a id="share" ref={this.share} target="_blank" href={getShareUri(this.currentIssue)}>Partager</a>
                    </div>
                </div>
            </article>
        )
    }
}

export default HomepageIssue;
