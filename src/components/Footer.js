import React from 'react';
import styled from '@emotion/styled';

import { media } from '../utils/emotion';
import ClutchLogo from '../assets/footer/clutch-co-logo.png';
import GoogleReviewsLogo from '../assets/footer/google-reviews-logo.png';
import { ReactComponent as Logo } from '../assets/footer/logo-gray.svg';

import Heading from './Heading';
import PageSection from './pages/PageSection';
import StarRating from './StarRating';
import Link from './Link';

const OfficeHeader = styled.h5`
  color: ${props => props.theme.colors.footer.header};
  opacity: 0.9;
  font-weight: ${props => console.log(props)};
  font-weight: ${props => props.theme.fontWeights[1]};
  font-size: ${props => props.theme.fontSizes[2]};
  margin: 0.5rem 0;
`

const FooterContainer = styled.footer`
  padding: 1rem 0;
`

const OfficesContainer = styled.div`
  display: flex;
  padding: 1rem 0;
  align-items: center;
  width: 100%;
  padding: 0 0 4rem;
  font-size: 1.6rem;
  line-height: 2rem;
`

const OfficeItem = styled.div`
  margin: 0 5rem 0 0;
  h5 {
    color: ${props => props.theme.colors.footer.officeHeader};
    font-size: ${props => props.theme.fontSizes[2]};
    margin-bottom: 2rem;
    opacity: 0.9;
  }
  p {
    color: ${props => props.theme.colors.heading};
    font-size: ${props => props.theme.fontSizes[2]};
    line-height: 3rem;
    opacity: 0.9;
  }
`

const ReviewsWrapper = styled.div`
  display: flex;
  margin-left: auto;
  grid-gap: 4rem;
`;

const RatingWrapper = styled.div`
  display: flex;
  img {
    width: 15px;
    margin-right: 5px;
  }
`;

const ReviewItem = styled.div`
  color: ${props => props.theme.colors.footer.reviewScore};
   a {
     display: block;
     height: 4.7rem;
   }
   p {
    font-size: 1.4rem;
    margin-left: auto;
   }
`;

const ratings = [
  {
    title: 'Clutch.co',
    logo: ClutchLogo,
    url: 'https://clutch.co/profile/masterborn',
    score: '4,9/5',
  },
  {
    title: 'Google Reviews',
    logo: GoogleReviewsLogo,
    url: 'https://www.google.com/search?q=masterborn&rlz=1C5CHFA_enPL917PL917&oq=masterborn&aqs=chrome..69i57j46i175i199j0j69i60l2j69i61j69i65j69i60.3723j0j9&sourceid=chrome&ie=UTF-8',
    score: '5.0',
  },
];

const StyledLogo = styled.img`
  width: 9rem;
  height: 3.8rem;
`;

const Footer = () => {
  return (
    <PageSection mb={3} mt={4}>
      <FooterContainer>
        <OfficeHeader>Our offices are waiting for you in:</OfficeHeader>
        <OfficesContainer>
          <OfficeItem>
            <h5>Wrocław, PL (HQ)</h5>
            <p>ul. Krupnicza 13,
              <br />
              50-075 Wrocław
            </p>
          </OfficeItem>
          <OfficeItem>
            <h5>Kielce, PL</h5>
            <p>ul. Gabrieli Zapolskiej 45B
              <br />
              25-435 Kielce
            </p>
          </OfficeItem>
          <OfficeItem>
            <h5>Austin, U.S.</h5>
            <p>Austin, TX
              <br />
              United States
            </p>
          </OfficeItem>
          <ReviewsWrapper>
            {ratings.map(rating => (
              <ReviewItem key={rating.title}>
                <a
                  href={rating.url}
                  title={rating.title}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={rating.logo} alt={rating.title} />
                </a>
                <RatingWrapper>
                  <StarRating />
                  <p>{rating.score}</p>
                </RatingWrapper>
              </ReviewItem>
            ))}
          </ReviewsWrapper>
        </OfficesContainer>
      </FooterContainer>
      <FooterContainer>
        <Link to="/">
          <StyledLogo src={Logo} />
        </Link>
      </FooterContainer>
    </PageSection>
  );
};

export default Footer;
