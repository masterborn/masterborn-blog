require('dotenv').config();

const remarkSlug = require('remark-slug');

const config = require('./config');

const plugins = [
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
      plugins: [`gatsby-remark-images`],
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
    resolve: `gatsby-plugin-emotion`,
    options: {
      sourceMap: true,
      autoLabel: process.env.NODE_ENV !== 'production',
      labelFormat: '[local]',
      cssPropOptimization: true,
    },
  },
  {
    resolve: `gatsby-plugin-google-fonts`,
    options: {
      fonts: [
        `IBM Plex Sans\:300`,
        `IBM Plex Sans\:400i`,
        `IBM Plex Sans\:400`,
        `IBM Plex Sans\:500`,
        `IBM Plex Sans\:600`,
        `IBM Plex Sans\:700`,
        `IBM Plex Mono\:300`,
        `IBM Plex Mono\:400`,
        `IBM Plex Mono\:500`,
      ],
      display: 'swap',
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
