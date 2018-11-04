import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Header from '../components/header';
import Footer from '../components/footer';

import '../../sass/style.scss';

const TemplateWrapper = ({ children }) => (
    <div className="page-container">
        <link href="https://fonts.googleapis.com/css?family=Orbitron:400,700|Raleway" rel="stylesheet" />

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
