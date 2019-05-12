/* global graphql */

import React from 'react';
import { withPrefix } from 'gatsby-link';
import Helmet from 'react-helmet';
import Issue from '../components/issue';
import Icon from '../components/icon';
import Facebook from '../components/icon/facebook.icon';
import Share from '../components/icon/share.icon';
import Download from '../components/icon/download.icon';

const PAGE_TITLE = 'Archives | Figure Figure';
const ICON_SIZE = 24;
const ICON_COLOR = 'black';

const getShareUri = (issue) => {
  const path = `https://figurefigure.fr/#!publication/${issue.number}`;
  return `https://facebook.com/sharer.php?u=${encodeURIComponent(path)}`;
};

class ArchivePage extends React.Component {
  constructor(props) {
    super(props);
    const data = props.data.allDataJson.edges[0].node;
    this.issues = data.issues.sort((a, b) => b.number - a.number);
    this.currentIssue = this.issues.length ? this.issues[0] : undefined;
    this.bg = React.createRef();
    this.share = React.createRef();
    this.download = React.createRef();
  }

  showIssue(issue) {
    this.bg.current.src = withPrefix(issue.archive_img);
    this.bg.current.alt = issue.title;
    this.share.current.href = getShareUri(issue);
    this.download.current.href = withPrefix(issue.path);
  }

  render() {
    return (
      <main className="row">
        <Helmet title={PAGE_TITLE} />
        <div className="col-auto issue-grid vh-site">
          <ul>
            {this.issues.map(issue => (
              <li key={`archive item ${issue.number}`} onMouseEnter={this.showIssue.bind(this, issue)}>
                <Issue issue={issue} />
              </li>
            ))}
          </ul>
        </div>
        <div className="col vh-site issue-content">
          <a href={withPrefix(this.currentIssue.path)}>
            <img ref={this.bg} className="h-100 issue_img" src={withPrefix(this.currentIssue.archive_img)} alt={this.currentIssue.title} />
          </a>
          <span className="h-100 issue-btn-list">
            <a className="btn" ref={this.download} target="_blank" href={withPrefix(this.currentIssue.path)} download>
              <Icon icon={Download} width={ICON_SIZE} height={ICON_SIZE} fill={ICON_COLOR} />
            </a>
            <br />
            <a className="btn" ref={this.share} target="_blank" href={getShareUri(this.currentIssue)}>
              <Icon icon={Share} width={ICON_SIZE} height={ICON_SIZE} fill={ICON_COLOR} />
            </a>
          </span>
        </div>
      </main>
    );
  }
}

export default ArchivePage;

export const pageQuery = graphql`
  query ArchiveQuery {
    allDataJson {
      edges {
        node {
          issues {
            number
            title
            date_of_issue
            path
            image_href
            archive_img
          }
        }
      }
    }
  }
`;
