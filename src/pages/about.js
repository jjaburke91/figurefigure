/* global graphql */

import React from 'react';
import Helmet from 'react-helmet';
import AboutSheet from '../components/aboutSheet';

const PAGE_TITLE = "À Propos | Figure Figure";

const AboutPage = ({ data }) => {
  const node = data.allDataJson.edges[0].node;
  const { director, artist, writer } = node.contact;

  return (
    <main>
      <Helmet title={PAGE_TITLE} />

      <div className="sheets-list vh-site">
        <div className="container">
          <AboutSheet lines={node.about.french} />
          <div className="sheet sheet--contact text-center sheet-bg">
            <div className="contact-section">
              <h2 className="contact-section__header font-secondary text-bold">Direction de publication</h2>
              <div className="contact-section__item">{director.name}</div>
              <a className="contact-section__item" href={`mailto:${director.email}`} target="_blank">{director.email}</a>
            </div>
            <div className="contact-section">
              <h2 className="contact-section__header font-secondary text-bold">Contribution</h2>
              <div className="contact-section__item">{writer.name}</div>
              <a className="contact-section__item" href={`mailto:${writer.email}`} target="_blank">{writer.email}</a>
            </div>
            <div className="contact-section">
              <h2 className="contact-section__header font-secondary text-bold">Direction artistique</h2>
              <div className="contact-section__item">{artist.name}</div>
              <a className="contact-section__item" href={`mailto:${artist.email}`} target="_blank">{artist.email}</a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AboutPage;

export const pageQuery = graphql`
  query AboutQuery {
    allDataJson {
      edges {
        node {
          about {
            french
          }
          contact {
            director {
              name
              email
            }
            artist {
              name
              email
            }
            writer {
              name
              email
            }
          }
        }
      }
    }
  }
`;
