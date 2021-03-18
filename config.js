const config = {
  gatsby: {
    pathPrefix: '/blog',
    gaTrackingId: 'UA-140964154-1',
    faceBookPixelId: '261143155633730',
    siteUrl: process.env.GATSBY_ROOT_URL || 'http://localhost:3000',
  },
  env: {
    masterbornWebsite: process.env.MASTERBORN_WEBSITE || 'https://masterborn.com/',
    ROOT_URL: process.env.GATSBY_ROOT_URL || 'http://localhost:3000',
  },
  general: {
    githubRepoUrl: 'https://github.com/masterborn/masterborn-blog',
    markdownPath: 'src/content',
    githubProductionPath: 'tree/master',
  },
  siteMetadata: {
    title: 'Blog | MasterBorn - Creating Premium Software',
    description:
      "Let's start the journey of creating your software with Premium Professionals.",
  },
};

module.exports = config;
