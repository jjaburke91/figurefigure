/* global graphql */

import React from 'react';
import AboutSheet from '../components/aboutSheet';

const AboutPage = props => {
    const {english, french} = props.data.allDataJson.edges[0].node.about;

    return (
        <main>
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
