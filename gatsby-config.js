const pixrem = require('pixrem');
const autoprefixer = require('autoprefixer');

module.exports = {
  siteMetadata: {
    title: 'Figure Figure',
  },
  plugins: [
    'gatsby-plugin-react-next',
    'gatsby-plugin-react-helmet',
    'svgo',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-131386344-1',
        anonymize: false,
        respectDNT: false,
      },
    },
    {
      resolve: 'gatsby-plugin-postcss-sass',
      options: {
        postCssPlugins: [
          pixrem(),
          autoprefixer({
            browsers: ['last 2 versions'],
          }),
        ],
        precision: 8,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: `${__dirname}/src/data/`,
      },
    },
    'gatsby-transformer-json',
  ],
};
