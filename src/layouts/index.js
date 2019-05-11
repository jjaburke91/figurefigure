/* global graphql */

import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Header from '../components/header';
import Footer from '../components/footer';

import '../../sass/style.scss';

const DEFAULT_IMAGE_URL = 'https://figurefigure.fr/images/socials_img.jpg';
const DEFAULT_URL = 'https://figurefigure.fr/';

const TemplateWrapper = ({ data, children }) => {
  const node = data.allDataJson.edges[0].node;
  const { site, issues } = node;
  const latestIssue = issues && issues[issues.length - 1];

  return (
    <React.Fragment>
      <Helmet>
        <link href="https://fonts.googleapis.com/css?family=Orbitron:400,900|Raleway" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=EB+Garamond" rel="stylesheet" />

        <link rel="canonical" href={DEFAULT_URL} />

        <meta name="description" content={site.description} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="figurefigure_fr" />
        <meta name="twitter:image" content={DEFAULT_IMAGE_URL} />

        <meta property="og:description" content={site.description} />
        <meta property="og:site_name" content="Figure Figure" />
        <meta property="og:title" content={site.title} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={DEFAULT_URL} />
        <meta property="og:image" content={DEFAULT_IMAGE_URL} />
        <meta property="og:image:alt" content={site.title} />

        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Helmet>
      <Header />

      {children()}
      <Footer issue={latestIssue} />
    </React.Fragment>
  );
};

TemplateWrapper.propTypes = {
  children: PropTypes.func,
  data: PropTypes.object
};

export default TemplateWrapper;

export const pageQuery = graphql`
  query LayoutQuery {
    allDataJson {
      edges {
        node {
          site {
            title
            description
          }
          issues {
            number
            title
            date_of_issue
            path
          }
        }
      }
    }
  }
`;
