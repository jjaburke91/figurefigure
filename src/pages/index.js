/* global graphql */

import React from 'react';
import Helmet from 'react-helmet';
import HomepageIssue from '../components/homepage_issue';

const PAGE_TITLE = 'Figure Figure';

const IndexPage = ({ data }) => {
  const items = data.allDataJson.edges[0].node.issues;

  return (
    <main>
      <Helmet title={PAGE_TITLE} />
      <HomepageIssue homepage issues={items} key="homepage issue" />
    </main>
  );
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
            pages {
              prefix
              sufix
              first
              count
            }
            path
            bg_href
          }
        }
      }
    }
  }
`;
