# Masterborn blog

This repository contains all of the content, code and build tools for [masterborn.com/blog](https://masterborn.com/blog).

Masterborn blog is fork of [Ockam.io](https://github.com/ockam-network/website) website, which use static site generator that is based on gatsby starter -> [gatsby-gitbook-starter](https://github.com/hasura/gatsby-gitbook-starter). Gatsby builds websites powered by the [JAMStack](https://www.gatsbyjs.org/docs/glossary/jamstack/), a modern architecture that uses JavaScript, APIs and Markdown without requiring the use of a database or server-side programming language.

## 🚀 Quick start

1.  **Start developing.**

    Navigate into the site’s directory and start it up.

    `npm run start`

2.  **Open the source code and start editing!**

    The site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

> If you want to test production build locally, remember to set environment variable `GATSBY_ACTIVE_ENV=production` before `npm run serve`

## Generating and managing MD files

### Folder structure and urls

Under `src/content` folder are stored all files related to generating html from md files.

### Documentation pages order in sidebar menu

To order your documentation page in sidebar menu, just add `order` metadata field in metadata .md file. ie:

```markdown
title: "Subpage 1"
metaTitle: "This is the title tag of this page"
metaDescription: "This is the meta description"
order: 2
```

### Generals markdown managing approach

- All assets should be stored inside under `assets` folder, ie. `src/content/blog/assets`.

## Using MDX

Thanks to MDX you can use any react component inside md files. Do do that you have to:

- import component or data right after metadata

```markdown
...
metaTitle: "This is the title tag of this page"
metaDescription: "This is the meta description"

---

import SampleComponent from '../sample/SampleComponent.js'
import json from '../sample/json.js'
```

Component path should be relative to current file.

Next, just use component like normal react element inside your md files:

```markdown
...

### Some markdown header

<SampleComponent json={json} title="custom string" />
```

##### WARNING

There could be some issue while creating new/removing components/data which are imported to `.md` files. If in development mode throw some error just stop server, clean gatsby cache and run it again:

```bash
npm run clean
npm run start
```

## Markdown files metadata fields

Below are listed described available metadata fields under a certain path of `src/content` folder:

`blog`

- **date** Post date, used for sorting. Format: YYYY-MM-DD [REQUIRED]
- **title** Title of post [REQUIRED]
- **description** Description of post show in post list and homepage [REQUIRED]
- **author** Author of post [REQUIRED]
- **authorAvatar** Author avatar, relative path to md file
- **isHomepageFeatured** Set true if should be visible in homepage shortcut blog section. Only 3 post will show there.
- **homepageFeaturedOrder** Set post order ( from 1 to 3 )
- **metaTitle** SEO meta title
- **metaDescription** SEO meta description

## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in the project.

    .
    ├── config.js
    ├── Dockerfile
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── package.json
    ├── package-lock.json
    ├── README.md
    ├── scripts/
    └──  src/

1. **`Dockerfile`**: Docker for local development.
1. **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more detail).
1. **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.
1. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**
1. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.
1. **`README.md`**: A text file containing useful reference information about your project.
1. **`scripts/`**: All additional scripts. At the moment there is only `get-depended-repos.sh` responsible for pulling depended repos needed by gatsby during build process.
1. **`src/`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

## 💫 Deploy

1. **Build the site for production.**

   Navigate into the site’s directory and run the build command.

   `npm run build`

1. **Serve the production build locally.**

   You can test the production build locally. Just run the following command to start a local HTML server.

   `npm run serve`
