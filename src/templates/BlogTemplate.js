import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import get from 'lodash/get';
import { getSrc } from 'gatsby-plugin-image';

import SEO from '../components/SEO';
import PageLayout from '../layouts/PageLayout';
import Post from '../components/blog/Post';
import defaultAvatar from '../assets/default_avatar.png';

const Wrapper = styled.div`
  position: relative;
  background-color: ${props => props.theme.colors.background};
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  z-index: 3;
  position: relative;
`;
export default function BlogTemplate(props) {
  const {
    data: { mdx, relatedPosts },
    location,
  } = props;

  const {
    frontmatter: { description, metaImage, date, author, authorAvatar },
    fields: { slug, title },
    parent: { relativePath },
    body,
    tableOfContents,
    timeToRead,
  } = mdx;

  const imageAvatar = authorAvatar ? getSrc(authorAvatar) : defaultAvatar;
  const metaImageSrc = getSrc(metaImage);
  const heroImage = get(metaImage, 'childImageSharp.gatsbyImageData', null);

  const footerCta = {
    headings: [
      'Join our Team of world-class React & Node.js developers',
      'We build valuable and successful products for U.S. based startups',
    ],
    buttonTexts: ['See open positions!', 'Hire us!'],
  };
  return (
    <PageLayout location={location} themeName="blog" footerCta={footerCta}>
      <SEO
        title={title}
        description={description}
        image={metaImageSrc}
        slug={slug}
      />
      <Wrapper>
        <Content>
          <Post
            metaImage={heroImage}
            body={body}
            title={title}
            authorAvatar={imageAvatar}
            author={author}
            date={date}
            location={location}
            filePath={relativePath}
            tableOfContents={tableOfContents}
            description={description}
            timeToRead={timeToRead}
            relatedPosts={relatedPosts.nodes}
          />
        </Content>
      </Wrapper>
    </PageLayout>
  );
}

BlogTemplate.propTypes = {
  data: PropTypes.shape({
    mdx: PropTypes.shape({
      fields: PropTypes.shape({
        slug: PropTypes.string,
        title: PropTypes.string,
        id: PropTypes.string,
      }),
      parent: PropTypes.shape({
        relativePath: PropTypes.string,
      }),
      frontmatter: PropTypes.shape({
        description: PropTypes.string,
        date: PropTypes.string,
        author: PropTypes.string,
        metaImage: PropTypes.shape({
          childImageSharp: PropTypes.shape({
            fluid: PropTypes.shape({
              src: PropTypes.string,
            }),
          }),
        }),
        authorAvatar: PropTypes.shape({
          childImageSharp: PropTypes.shape({
            fixed: PropTypes.shape({
              src: PropTypes.string,
            }),
          }),
        }),
      }),
      tableOfContents: PropTypes.shape({
        items: PropTypes.arrayOf(PropTypes.shape({})),
      }),
      body: PropTypes.string,
      timeToRead: PropTypes.number,
    }),
    relatedPosts: PropTypes.shape({
      nodes: PropTypes.arrayOf(
        PropTypes.shape({
          slug: PropTypes.string,
          frontmatter: PropTypes.shape({
            title: PropTypes.string,
            description: PropTypes.string,
            metaImage: PropTypes.shape({
              childImageSharp: PropTypes.shape({
                fluid: PropTypes.shape({
                  src: PropTypes.string,
                }),
              }),
            }),
          }),
        })
      ),
    }),
  }),
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

BlogTemplate.defaultProps = {
  data: {
    mdx: {
      fields: {},
      frontmatter: {},
      body: '',
    },
  },
};

export const pageQuery = graphql`
  query($id: String!, $relatedFileAbsolutePaths: [String!]!) {
    mdx(fields: { id: { eq: $id } }) {
      fields {
        id
        title
        slug
      }
      body
      tableOfContents
      parent {
        ... on File {
          relativePath
        }
      }
      frontmatter {
        metaTitle
        metaDescription
        description
        metaImage {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
          }
        }
        date
        author
        authorAvatar {
          childImageSharp {
            gatsbyImageData(layout: FIXED)
          }
        }
      }
      timeToRead
    }
    relatedPosts: allMdx(
      filter: { fileAbsolutePath: { in: $relatedFileAbsolutePaths } }
      limit: 3
    ) {
      nodes {
        slug
        excerpt
        frontmatter {
          title
          description
          metaImage {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
            }
          }
        }
      }
    }
  }
`;
