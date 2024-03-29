const config = {
  gatsby: {
    pathPrefix: '/blog',
    gaTrackingId: 'UA-140964154-1',
    faceBookPixelId: '261143155633730',
    googleTagManagerId: '5LB3KK3',
    siteUrl: process.env.GATSBY_ROOT_URL || 'http://localhost:3000',
  },
  env: {
    masterbornWebsite:
      process.env.MASTERBORN_WEBSITE || 'https://masterborn.com',
    ROOT_URL: process.env.GATSBY_ROOT_URL || 'http://localhost:3000',
  },
  general: {
    githubRepoUrl: 'https://github.com/masterborn/masterborn-blog',
    markdownPath: 'src/content',
    postsPerPage: 12,
    githubProductionPath: 'tree/master',
  },
  siteMetadata: {
    title: 'Blog | MasterBorn - Creating Premium Software',
    description:
      "Let's start the journey of creating your software with Premium Professionals.",
  },
  algolia: {
    appId: process.env.ALGOLIA_APP_ID,
    searchKey: process.env.ALGOLIA_SEARCH_KEY,
    adminKey: process.env.ALGOLIA_ADMIN_KEY,
    indexName: process.env.ALGOLIA_INDEX_NAME || 'local_BLOG',
  },
  custom: {
    localization: {
      url: 'https://ipapi.co/json/',
      countryCode: 'PL',
    },
  },
  apiUrl: process.env.API_HOST || 'https://website-api.masterborn.com',
};

module.exports = config;
