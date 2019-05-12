/* global graphql */

import React from 'react';
import Helmet from 'react-helmet';
import Icon from '../components/icon';
import Facebook from '../components/icon/facebook.icon';
import Instagram from '../components/icon/instagram.icon';
import Twitter from '../components/icon/twitter.icon';
import AboutSheet from '../components/aboutSheet';

const PAGE_TITLE = "À Propos | Figure Figure";
const ICON_SIZE = 32;
const ICON_COLOR = 'black';

const AboutPage = ({ data }) => {
  const node = data.allDataJson.edges[0].node;
  // const { director, artist, writer } = node.contact;

  return (
    <main>
      <Helmet title={PAGE_TITLE} />

      <div className="sheets-list vh-site">
        <div className="container">
          <AboutSheet lines={node.about.presentation} />

          <div className="sheet share-buttons">
            <div id="mc_embed_signup">
              <form action="https://figurefigure.us20.list-manage.com/subscribe/post?u=0e476a01d6e5c29b2f4b5d9f3&amp;id=af50262d4a" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate form-inline" target="_blank" novalidate>
                <div id="mc_embed_signup_scroll">
                  <label className="my-3 mr-2" forHtml="mce-EMAIL"><p>NEWSLETTER</p></label>
                  <div className="input-group">
                    <input type="email" name="EMAIL" className="email form-control" id="mce-EMAIL" placeholder="Addresse email" autoComplete required />
                    <div className="d" aria-hidden="true">
                      <input type="text" name="b_0e476a01d6e5c29b2f4b5d9f3_af50262d4a" tabIndex="-1" value="" />
                    </div>
                    <div className="input-group-append">
                      <input type="submit" value=" ! " name="subscribe" id="mc-embedded-subscribe" className="btn btn-dark" />
                    </div>
                  </div>
                </div>
              </form>
            </div>

            <a className="btn" href="https://www.instagram.com/figurefigure.fr/" target="_blank" rel="noopener noreferrer">
              <Icon icon={Instagram} width={ICON_SIZE} height={ICON_SIZE} fill={ICON_COLOR} />
            </a>
            <a className="btn" href="https://www.facebook.com/figurefigure.fr/" target="_blank" rel="noopener noreferrer">
              <Icon icon={Facebook} width={ICON_SIZE} height={ICON_SIZE} fill={ICON_COLOR} />
            </a>
            <a className="btn" href="https://twitter.com/figurefigure_fr" target="_blank" rel="noopener noreferrer">
              <Icon icon={Twitter} width={ICON_SIZE} height={ICON_SIZE} fill={ICON_COLOR} />
            </a>
          </div>

          <div className="sheet sheet--contact text-center sheet-bg">
            {node.contact.map(element => (
              <div key={element.title} className="contact-section">
                <p className="contact-section__header">{element.title.toUpperCase()}</p>
                <div className="contact-section__item">{element.name}</div>
                {element.email
                  ? <a className="contact-section__item" href={`mailto:${element.email}`} target="_blank">{element.email}</a>
                  : ''
                }
              </div>
            ))}
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
            presentation
          }
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
