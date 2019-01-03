/* global graphql */

import React from 'react';
import HomepageIssue from '../components/homepage_issue';
import Helmet from 'react-helmet';

const PAGE_TITLE = "Archives | Figure Figure";

const ArchivePage = props => {
    const issues = props.data.allDataJson.edges[0].node.issues;

    return (
        <main>
            <Helmet title={PAGE_TITLE} />

            <div className="issue-grid">
                {issues.sort((a, b) => b.number - a.number).map((issue, i) => (
                    <HomepageIssue issues={[issue]} key={`archive item ${i}`} />
                ))}
            </div>
        </main>
    )
};

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
            pages {
              prefix
              sufix
              first
              count
            }
            path
          }
        }
      }
    }
  }
`;
