import React, {useContext} from 'react';
import styled from '@emotion/styled';

import ClutchLogo from '../assets/footer/clutch-co-logo.png';
import GoogleReviewsLogo from '../assets/footer/google-reviews-logo.png';
import MBLogoGray from '../assets/footer/logo-gray.svg';
import config from '../../config';
import { CountryContext } from '../contexts/CountryContext';
import useModal from '../hooks/useModal';
import { media } from '../utils/emotion';
import navigateToWebsiteCarrier from '../utils/navigateToWebsiteCarrier';

import ContactModal from './ContactModal';
import PageSection from './pages/PageSection';
import Content from './pages/Content';
import StarRating from './StarRating';
import Link from './Link';
import Logo from './Logo';
import Heading from './Heading';
import Button from './Button';

const OfficeHeader = styled.h5`
  color: ${props => props.theme.colors.footer.header};
  opacity: 0.9;
  font-weight: ${props => props.theme.fontWeights[1]};
  font-size: ${props => props.theme.fontSizes[2]};
  margin: 0.5rem 0;
`

const FooterContainer = styled.footer`
  padding: 3rem 3rem 0;
  ${media.desktop`
    padding: 3rem 0 0;
  `}
`

const OfficesContainer = styled.div`
  display: flex;
  padding: 1rem 3rem;
  align-items: center;
  width: 100%;
  padding: 0;
  font-size: 1.6rem;
  line-height: 2rem;
  flex-direction: column;
  ${media.desktop`
    padding: 1rem 0;
    flex-direction: initial;
  `}
`

const OfficeItem = styled.div`
  margin: 0;
  width: 100%;
  h5 {
    color: ${props => props.theme.colors.footer.officeHeader};
    font-size: ${props => props.theme.fontSizes[2]};
    margin-bottom: 2rem;
    opacity: 0.9;
  }
  p {
    color: ${props => props.theme.colors.footer.officeText};
    font-size: ${props => props.theme.fontSizes[2]};
    line-height: 3rem;
    opacity: 0.9;
  }
  ${media.desktop`
    margin: 0 5rem 0 0;
    width: 100%;
  `}
`

const ReviewsWrapper = styled.div`
  display: grid;
  margin: 4rem 0px;
  grid-template-columns: 1fr 1fr;
  grid-gap: 4rem;
  ${media.desktop`
    display: flex;
    margin-left: auto;
  `}
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

const FooterNavigationWrapper = styled.div`
   display: flex;
   align-items: center;
   border-top: 1px solid ${props => props.theme.colors.footer.border};
   flex-direction: column;
   padding: 4rem 0px;
   ${media.desktop`
    padding: 0;
    flex-direction: initial;
  `}
`

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

const StyledLogo = styled(Logo)`
  width: 9rem;
  height: 3.8rem;
`;

const FooterNavigation = styled.ul`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  padding: 0 2rem;
`

const FooterLink = styled(Link)`
  color: ${props => props.theme.colors.header.color};
  margin: 1.5rem;
  padding: 1rem 0;
  :hover {
    color: ${props => props.theme.colors.primary};
    text-shadow: 0 0 1px;
  }
`

const CopyrightBox = styled.p`
  margin: 0;
  color: ${props => props.theme.colors.footer.copyright};
  ${media.desktop`
    margin-left: auto;
  `}
`

const RodoBox = styled.div`
  background: ${props => props.theme.colors.footer.rodo};
  color: ${props => props.theme.colors.footer.officeHeader};
  font-size: 1.2rem;
  padding: 2rem;
  ${media.desktop`
    font-size: 1.1rem;
    padding: 1.5rem 0;
  `}
`

const FooterCta = styled.div`
  background:  ${props => props.theme.colors.footer.ctaBackground};
  clip-path: ellipse(129% 106% at 50% 110%);
  padding: 7rem 2rem 2rem;
  ${media.desktop`
    padding: 10rem 0;
  `}
`

const StyledHeading = styled(Heading)`
  text-align: center;
  font-size: 2rem;
  ${media.desktop`
    font-size: 3.2rem;
  `}
`

const StyledButton = styled(Button)`
  margin: 5rem auto;
  display: flex;
  padding: 0.9rem 8.5rem;
`

const Footer = () => {
  const { isInPoland } = useContext(CountryContext);
  // eslint-disable-next-line no-use-before-define
  const [, showContactModal, hideContactModal] = useModal(ContactModal, { onSubmitContactForm });

  const onSubmitContactForm =() => {
    hideContactModal();
  }

  const openContactModal = () => {
    showContactModal();
  };

  const contactButtonAction = isInPoland ? navigateToWebsiteCarrier : openContactModal;

  return (
    <>
      <FooterCta>
        <StyledHeading as="h3">
          {isInPoland
            ? 'Join our Team of world-class React & Node.js developers'
            : 'We build valuable and successfull products for U.S. based startups'
          }
        </StyledHeading>
        <StyledButton
          variant="cta"
          size="cta"
          onClick={contactButtonAction}
        >{isInPoland ? 'See open positions!' : 'Hire us!'}
        </StyledButton>
      </FooterCta>
      <PageSection marginBottom="5rem">
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
        <FooterNavigationWrapper>
          <Link to="/" href={config.env.masterbornWebsite} title="Masterborn.com">
            <StyledLogo src={MBLogoGray} />
          </Link>
          <FooterNavigation>
            <FooterLink
              title="Home"
              href={config.env.masterbornWebsite}
            >
              Home
            </FooterLink>
            <FooterLink
              title="About Us"
              href="/about"
            >
              About Us
            </FooterLink>
            <FooterLink
              title="Career"
              href="/career"
            >
              Career
            </FooterLink>
            <FooterLink
              title="Blog"
              href="/blog"
            >
              Blog
            </FooterLink>
          </FooterNavigation>
          <CopyrightBox>Copyright © MasterBorn 2016-2021</CopyrightBox>
        </FooterNavigationWrapper>
      </PageSection>
      <RodoBox>
        <Content mb={0} mt={0}>
          The Administrator of your data is MasterBorn, with its registered office in Wroclaw, Krupnicza 13, Wroclaw.  If you want to withdraw, get an insight or update information about you, then contact us: contact@masterborn.com
        </Content>
      </RodoBox>
    </>
  );
};

export default Footer;
