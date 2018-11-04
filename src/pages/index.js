/* global graphql */

import React from 'react';

const IndexPage = props => {
    const items = props.data.allDataJson.edges[0].node.issues;

    const latestIssue = items && items[items.length -1];

    return (
        <main>
            <div className="text-center">
                <h2>
                    {`${latestIssue.title} - Number ${latestIssue.number} - ${latestIssue.date_of_issue}`}
                </h2>
                <img src={latestIssue.image_href} />
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
          }
        }
      }
    }
  }
`;
