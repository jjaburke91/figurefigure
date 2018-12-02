import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Header from '../components/header';
import Footer from '../components/footer';

import '../../sass/style.scss';

const WEBSITE_DESCRIPTION = ""; // TODO
const WEBSITE_TITLE = "Figure Figure";

const DEFAULT_IMAGE_URL = ""; // TODO
const DEFAULT_URL = "http://figurefigure.fr/";

const TemplateWrapper = ({ children }) => (
    <div className="page-container">
        <link href="https://fonts.googleapis.com/css?family=Orbitron:400,900|Raleway" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=EB+Garamond" rel="stylesheet" />

        <link rel="canonical" href={DEFAULT_URL} />

        <meta name="description" content={WEBSITE_DESCRIPTION} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="figurefigure_fr" />
        <meta name="twitter:image" content={DEFAULT_IMAGE_URL} />

        <meta property="og:description" content={WEBSITE_DESCRIPTION} />
        <meta property="og:site_name" content="Figure Figure" />
        <meta property="og:title" content={WEBSITE_TITLE} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={DEFAULT_URL} />
        <meta property="og:image" content={DEFAULT_IMAGE_URL} />
        <meta property="og:image:alt" content={WEBSITE_TITLE} />

        <Helmet
            title="Figure Figure"
        />
        <Header/>

        {children()}

        <Footer/>
    </div>
);

TemplateWrapper.propTypes = {
    children: PropTypes.func,
};

export default TemplateWrapper;
