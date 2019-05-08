/* global graphql */

import React from 'react';
import Issue from '../components/issue';
import Helmet from 'react-helmet';
import { withPrefix } from "gatsby-link";

const PAGE_TITLE = "Archives | Figure Figure";

class ArchivePage extends React.Component {
  constructor(props) {
    super(props);
    const data = props.data.allDataJson.edges[0].node;
    //const latestIssue = data.issues && data.issues[data.issues.length -1];
    this.issues = data.issues;
    console.log('constructor', data);
    this.bg = React.createRef();
  }
  showIssue(issue) {
    /*this.setState({
        hover: true
    });*/
    /*$(e.currentTarget).one("mouseleave", function (e) {
        this.onMouseLeaveHandler();
    }.bind(this));*/

    //const bg = <img className="issue__img" src={withPrefix(issue.image_href)} alt={`Issue ${issue.title} link`}/>
    this.bg.current.src = withPrefix(issue.archive_img);
    this.bg.current.alt = `Issue ${issue.title} link`;
  }

  render() {
    return (
      <main className="row">
          <Helmet title={PAGE_TITLE} />
          <div className="col-4 issue-grid vh-site">
            <ul>
              {this.issues.sort((a, b) => b.number - a.number).map((issue, i) => (
                <li key={`archive item ${i}`} onMouseEnter={this.showIssue.bind(this, issue)} >
                  <Issue
                    issue={issue}
                  />
                </li>
              ))}
            </ul>
          </div>
          <div className="col-8 vh-site">
            <img ref={this.bg} className="issue__img h-100"/>
          </div>
      </main>
    )
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
