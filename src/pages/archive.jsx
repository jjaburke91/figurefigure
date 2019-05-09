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
const ICON_HEIGHT = 48;
const ICON_WIDTH = 48;
const ICON_COLOR = 'black';

class ArchivePage extends React.Component {
  constructor(props) {
    super(props);
    const data = props.data.allDataJson.edges[0].node;
    this.issues = data.issues;
    this.currentIssue = this.issues.length ? this.issues[this.issues.length - 1] : undefined;
    this.bg = React.createRef();
  }

  showIssue(issue) {
    this.bg.current.src = withPrefix(issue.archive_img);
    this.bg.current.alt = issue.title;
  }

  render() {
    return (
      <main className="row">
        <Helmet title={PAGE_TITLE} />
        <div className="col-md-auto issue-grid vh-site">
          <ul>
            {this.issues.sort((a, b) => b.number - a.number).map((issue, i) => (
              <li key={`archive item ${i}`} onMouseEnter={this.showIssue.bind(this, issue)}>
                <Issue
                  issue={issue}
                />
              </li>
            ))}
          </ul>
        </div>
        <div className="col-8 vh-site">
          <img ref={this.bg} className="issue__img h-100" src={withPrefix(this.currentIssue.archive_img)} alt={this.currentIssue.title} />
        </div>
        <div className="col-md-auto">
          <Icon icon={Share} width={ICON_WIDTH} height={ICON_HEIGHT} fill={ICON_COLOR} />
          <Icon icon={Download} width={ICON_WIDTH} height={ICON_HEIGHT} fill={ICON_COLOR} />
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
