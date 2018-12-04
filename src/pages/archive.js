/* global graphql */

import React from 'react';
import Issue from '../components/issue';
import Helmet from 'react-helmet';

const PAGE_TITLE = "Archives | Figure Figure";

const ArchivePage = props => {
    const issues = props.data.allDataJson.edges[0].node.issues;

    return (
        <main>
            <Helmet title={PAGE_TITLE} />

            <div className="issue-grid">
                {issues.sort((a, b) => b.number - a.number).map((issue, i) => (
                    <Issue issue={issue} key={`archive item ${i}`} />
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
            image_href
            path
          }
        }
      }
    }
  }
`;