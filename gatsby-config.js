require('dotenv').config();

const remarkSlug = require('remark-slug');

const config = require('./config');
const getAlgoliaQueries = require('./scripts/get-algolia-queries');

const plugins = [
  'gatsby-plugin-styled-components',
  'gatsby-plugin-sitemap',
  'gatsby-plugin-sharp',
  'gatsby-transformer-sharp',
  'gatsby-plugin-svgr',
  {
    resolve: `gatsby-plugin-layout`,
    options: {
      component: require.resolve(`./src/templates/index.js`),
    },
  },
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
        `gatsby-remark-images`,
        {
          resolve: "gatsby-remark-related-posts",
          options: {
            posts_dir: `${__dirname}/${config.general.markdownPath}`,
          },
        },
      ],
    },
  },
  {
    resolve: 'gatsby-plugin-mdx',
    options: {
      gatsbyRemarkPlugins: [
        {
          resolve: 'gatsby-remark-images',
          options: {
            maxWidth: 1035,
            quality: 75,
            linkImagesToOriginal: false,
          },
        },
        {
          resolve: 'gatsby-remark-copy-linked-files',
        },
      ],
      remarkPlugins: [remarkSlug],
      extensions: ['.mdx', '.md'],
    },
  },
  'gatsby-plugin-emotion',
  'gatsby-plugin-remove-trailing-slashes',
  'gatsby-plugin-react-helmet',
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'docs',
      path: `${__dirname}/src/content`,
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: `${__dirname}/src/assets`,
    },
  },
  {
    resolve: `gatsby-plugin-gtag`,
    options: {
      // your google analytics tracking id
      trackingId: config.gatsby.gaTrackingId,
      // Puts tracking script in the head instead of the body
      head: true,
      // enable ip anonymization
      anonymize: false,
    },
  },
  {
    resolve: `gatsby-plugin-facebook-pixel`,
    options: {
      pixelId: config.gatsby.faceBookPixelId,
    },
  },
  {
    resolve: `gatsby-plugin-emotion`,
    options: {
      sourceMap: true,
      autoLabel: process.env.NODE_ENV !== 'production',
      labelFormat: '[local]',
      cssPropOptimization: true,
    },
  },
  {
    resolve: 'gatsby-plugin-web-font-loader',
    options: {
      custom: {
        families: ['Inter'],
        urls: ['/fonts.css'],
      },
    },
  },
  {
    resolve: `gatsby-plugin-algolia`,
    options: {
      appId: config.algolia.appId,
      apiKey: config.algolia.adminKey,
      indexName: config.algolia.indexName,
      queries: getAlgoliaQueries(),
    },
  },
];

module.exports = {
  pathPrefix: config.gatsby.pathPrefix,
  siteMetadata: {
    githubRepoUrl: config.general.githubRepoUrl,
    markdownPath: config.general.markdownPath,
    githubProductionPath: config.general.githubProductionPath,
    description: config.siteMetadata.description,
    title: config.siteMetadata.title,
    siteUrl: config.gatsby.siteUrl,
    env: config.env,
  },
  plugins,
};
