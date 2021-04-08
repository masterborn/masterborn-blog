import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import Caption from '../Caption';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 3rem 0 -1rem;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;

`
const Avatar = styled.div`
  border-radius: 50%;
  width: 4rem;
  height: 4rem;
  margin-right: 1.6rem;
  background-image: url(${props => props.src});
  background-repeat: no-repeat;
  background-size: cover;
`;

const AuthorBox = ({ image, name, date, timeToRead }) => {
  return (
    <Container>
      <Avatar src={image} />
      <ContentContainer>
        <Caption fontSize={0} color="authorHeader.author" opacity={0.9}>
          {name}
        </Caption>
        <Caption fontSize={0} color="authorHeader.authorDate" mt={2} opacity={0.9}>
          {date} | {timeToRead} min read
        </Caption>
      </ContentContainer>

    </Container>
  );
};

AuthorBox.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  timeToRead: PropTypes.number.isRequired,
};

export default AuthorBox;
