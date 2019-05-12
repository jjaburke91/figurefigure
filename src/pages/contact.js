/* global graphql */

import React from 'react';

import './contact.scss';
import { withPrefix } from 'gatsby-link';
import Helmet from 'react-helmet';

const PAGE_TITLE = "Contact | Figure Figure";

const ContactPage = ({ data }) => {
  const { director, artist, writer } = data.allDataJson.edges[0].node.contact;

  return (
    <main>
      <Helmet title={PAGE_TITLE} />

      <div className="sheets-list">
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
    </main>
  );
};

export default ContactPage;

export const pageQuery = graphql`
  query ContactQuery {
    allDataJson {
      edges {
        node {
          contact {
            title
            name
            email
          }
        }
      }
    }
  }
`;
