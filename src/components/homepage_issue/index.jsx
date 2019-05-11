import React from 'react';
import PropTypes from 'prop-types';
import { withPrefix } from 'gatsby-link';
import { showMonthDate } from '../utils';

import './homepage_issue.scss';

/*
const getShareUri = (issue) => {
  const path = `https://figurefigure.fr/#!publication/${issue.number}`;
  return `https://facebook.com/sharer.php?u=${encodeURIComponent(path)}`;
};
*/

class HomepageIssue extends React.Component {
  constructor(props) {
    super(props);
    // create a ref to store the textInput DOM element
    this.download = React.createRef();
    this.share = React.createRef();
    this.homepage = true;
    const latestIssue = props.issues && props.issues[props.issues.length - 1];
    /* const splits = document.location.hash.substring(1).split('?');
    const psplits = splits[0].split('/');
    const currentNumber = psplits.length > 1 ? Number(psplits[1]) : latestIssue.number;
    this.firstPage = 0; */
    this.currentIssue = latestIssue;
    /* props.issues.sort((a, b) => b.number - a.number).map((issue, i) => {
        const p = issue.pages;
        if (p) {
            const pageCount = this.homepage ? 5 : p.count;
            Array.from(Array(pageCount).keys()).map((value, index) => {
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
        } */
  }

  /*setIssuePage(issue) {
      if (!issue)
          return;
      window.location.hash = "#!publication/" + issue.number;
      this.download.current.href = withPrefix(issue.path);
      this.share.current.href = getShareUri(issue);
  }*/

  render() {
    //const className = this.homepage ? 'issue--full-height' : '';
    const footerClassName = 'footer-content ' + (this.homepage ? 'footer-homepage' : '');

    const d = new Date(this.currentIssue.date_of_issue);
    const footerDate = this.homepage ? '' : <p>Numéro {this.currentIssue.number} – {showMonthDate(d)/*monthNames[d.getUTCMonth()]} {d.getFullYear()*/}</p>;
    const footerTitle = this.homepage ? '' : <p>{this.currentIssue.title}</p>;

    /*
        <div className="text-center footer">
          <div className={footerClassName}>
            {footerDate}
            {footerTitle}
            <a id="download" ref={this.download} href={withPrefix(this.currentIssue.path)}>Télécharger</a> | <a id="share" ref={this.share} target="_blank" href={getShareUri(this.currentIssue)}>Partager</a>
          </div>
        </div>
        */

    return (
      <article>
        <a href={withPrefix(this.currentIssue.path)}>
          <img className="vh-site issue--full-height" src={withPrefix(this.currentIssue.bg_href)} alt={this.currentIssue.title} />
        </a>
      </article>
    );
  }
}

export default HomepageIssue;
