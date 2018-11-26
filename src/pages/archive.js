/* global graphql */

import React from 'react';
import Issue from '../components/issue';

const ArchivePage = props => {
    const issues = props.data.allDataJson.edges[0].node.issues;

    return (
        <main>
            <div className="issue-grid">
                {issues.reverse().map((issue, i) => (
                    <Issue issue={issue} key={i} />
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
