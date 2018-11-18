/* global graphql */

import React from 'react';

import './contact.scss';

const ContactPage = props => {
    const { director, artist, writer }= props.data.allDataJson.edges[0].node.contact;

    return (
        <main>
            <div className="sheets-list">
                <div className={"sheet sheet--contact text-center"}>
                    <div className={'contact-section'}>
                        <h3 className={'font-secondary text-bold text-uppercase'}>Directrice De La Rédaction</h3>
                        <div className={"contact-section__item"}>{director.name}</div>
                        <div className={"contact-section__item"}>{director.email}</div>
                    </div>
                    <div className={'contact-section'}>
                        <h3 className={'font-secondary text-bold text-uppercase'}>Rédactrice</h3>
                        <div className={"contact-section__item"}>{artist.name}</div>
                        <div className={"contact-section__item"}>{artist.email}</div>
                    </div>
                    <div className={'contact-section'}>
                        <h3 className={'font-secondary text-bold text-uppercase'}>Direction Artistique</h3>
                        <div className={"contact-section__item"}>{writer.name}</div>
                        <div className={"contact-section__item"}>{writer.email}</div>
                    </div>
                </div>
            </div>
        </main>
    )
};

export default ContactPage;

export const pageQuery = graphql`
  query ContactQuery {
    allDataJson {
      edges {
        node {
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
