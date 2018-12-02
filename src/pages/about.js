/* global graphql */

import React from 'react';
import AboutSheet from '../components/aboutSheet';
import Helmet from 'react-helmet';

const PAGE_TITLE = "À Propos | Figure Figure";

const AboutPage = props => {
    const {english, french} = props.data.allDataJson.edges[0].node.about;

    return (
        <main>
            <Helmet title={PAGE_TITLE} />

            <div className="sheets-list">
                {french && <AboutSheet lines={french}/>}
                {english && <AboutSheet lines={english}/>}
            </div>
        </main>
    )
};

export default AboutPage;

export const pageQuery = graphql`
  query AboutQuery {
    allDataJson {
      edges {
        node {
          about {
            english
            french
          }
        }
      }
    }
  }
`;
