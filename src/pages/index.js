/* global graphql */

import React from 'react';
import Issue from '../components/issue';

const IndexPage = props => {
    const items = props.data.allDataJson.edges[0].node.issues;

    const latestIssue = items && items[items.length -1];

    return (
        <main>
            <div className="text-center">
                <Issue issue={latestIssue} isFullPage={true} key={"homepage issue"}/>
            </div>
        </main>
    )
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexQuery {
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
