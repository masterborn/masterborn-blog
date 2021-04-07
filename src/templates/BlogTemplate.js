import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import get from 'lodash/get';

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
    data: { mdx },
    location,
  } = props;

  const {
    frontmatter: {
      metaTitle,
      metaDescription,
      metaImage,
      date,
      author,
      authorAvatar,
    },
    fields: { slug, title },
    parent: { relativePath },
    body,
    tableOfContents,
  } = mdx;

  const imageAvatar = authorAvatar
    ? authorAvatar.childImageSharp.fixed.src
    : defaultAvatar;

  const metaImageSrc = get(metaImage, 'childImageSharp.fixed.src', null);

  return (
    <PageLayout location={location} themeName="blog">
      <SEO
        title={metaTitle}
        description={metaDescription}
        image={metaImageSrc}
        slug={slug}
      />
      <Wrapper>
        <Content>
          <Post
            body={body}
            title={title}
            authorAvatar={imageAvatar}
            author={author}
            date={date}
            location={location}
            filePath={relativePath}
            tableOfContents={tableOfContents}
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
        metaTitle: PropTypes.string,
        metaDescription: PropTypes.string,
        date: PropTypes.string,
        author: PropTypes.string,
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
  query($id: String!) {
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
        metaImage {
          childImageSharp {
            fixed {
              ...GatsbyImageSharpFixed
            }
          }
        }
        date
        author
        authorAvatar {
          childImageSharp {
            fixed {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`;
