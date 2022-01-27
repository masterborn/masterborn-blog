import React, { useContext } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import DribbbleLogo from '../assets/footer/dribbble-logo.svg';
import ClutchLogo from '../assets/footer/clutch-logo.svg';
import GoogleReviewsLogo from '../assets/footer/google-reviews-logo.svg';
import MBLogoGray from '../assets/footer/logo-color.svg';
import config from '../../config';
import { CountryContext } from '../contexts/CountryContext';
import useModal from '../hooks/useModal';
import useActiveMenuStyles from '../hooks/useActiveMenuStyles';
import { media } from '../utils/emotion';
import utmCampaignNames from '../utils/utmCampaignNames';
import navigateToWebsiteCareer from '../utils/navigateToWebsiteCareer';

import ContactModal from './ContactModal';
import PageSection from './pages/PageSection';
import Content from './pages/Content';
import StarRating from './StarRating';
import Link from './Link';
import Logo from './Logo';
import Heading from './Heading';
import Button from './Button';

const OfficeHeader = styled.h4`
  color: ${({ theme: { colors } }) => colors.base150};
  opacity: 0.9;
  font-weight: ${props => props.theme.fontWeights[1]};
  font-size: ${props => props.theme.fontSizes[2]};
  margin: 4rem 0 4.4rem 0;

  ${media.tabletMax`
    margin-top: 9.6rem;
    margin-bottom: 3.2rem;
  `}
`;

const FooterContainer = styled.footer`
  margin-bottom: 4rem;
  ${media.tabletMax`
    margin-bottom: 4.8rem;
  `}
`;

const OfficesContainer = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  padding: 0;
  font-size: 1.6rem;
  line-height: 2rem;
  flex-direction: column;

  ${media.tabletMax`
    flex-direction: row;
  `}
`;

const OfficesWrapper = styled.div`
  display: grid;
  ${media.tabletMax`
    grid-template-columns: 1fr 1fr;
    gap: 4rem 4.5rem;
    width: 62.6rem;
    height: 13.2rem;
  `}
  grid-template-columns: 1fr;
  gap: 3.2rem;
  height: auto;
  width: 100%;
`;

const OfficeItem = styled.div`
  margin: 0;
  width: 28.2rem;
  min-width: 28.2rem;
  height: 4.6rem;
  text-align: left;

  h5 {
    color: ${props => props.theme.colors.footer.officeHeader};
    font-size: ${props => props.theme.fontSizes[2]};
    opacity: 0.9;
    line-height: 2.4rem;
    margin: 0;
  }
  p {
    color: ${({ theme: { colors } }) => colors.base150};
    font-size: ${props => props.theme.fontSizes[1]};
    line-height: 2.1rem;
    opacity: 0.9;
    margin: 0;
  }
  ${media.desktop`
    width: 100%;
  `}
`;

const ReviewsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-self: center;
  width: 100%;
  gap: 1rem;
  margin-top: 4.4rem;
  ${media.tabletMax`
    display: flex;
    margin-left: auto;
    margin-top: 0;
    gap: 1.2rem;
  `}
`;

const FooterNavigationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: 0px solid ${props => props.theme.colors.footer.border};

  ${media.mobileMax`
    padding: 4.4rem 0px 4rem;
    border-top-width: 1px;
  `};

  ${media.tabletMax`
    align-items: flex-start;
    padding: 4.8rem 0 6.9rem 0;
    flex-direction: initial;
  `};
`;

const ratings = [
  {
    title: 'Dribbble',
    logo: DribbbleLogo,
    url: 'https://dribbble.com/MasterBornSoftware',
    score: null,
  },
  {
    title: 'Clutch.co',
    logo: ClutchLogo,
    url: 'https://clutch.co/profile/masterborn',
    score: '4.9/5',
  },
  {
    title: 'Google Reviews',
    logo: GoogleReviewsLogo,
    url:
      'https://www.google.com/search?q=masterborn&rlz=1C5CHFA_enPL917PL917&oq=masterborn&aqs=chrome..69i57j46i175i199j0j69i60l2j69i61j69i65j69i60.3723j0j9&sourceid=chrome&ie=UTF-8',
    score: '5/5',
  },
];

const StyledLogo = styled(Logo)`
  width: 9rem;
  height: 3.2rem;
  ${media.tabletMax`
  width: 7.7rem;
  `}
`;

const FooterNavigation = styled.ul`
  order: -1;
  padding: 0;
  display: grid;
  margin: 0;
  grid-template-columns: 1fr 1fr;
  gap: 1.2rem 2.2rem;

  ${media.mobileMax`
    order: 0;
    display: flex;
    flex-flow: row nowrap;
    gap: 0;
    margin: 4rem 0;
  `};
  ${media.tabletMax`
    margin: 0.6rem 0 0 7.3rem;
  `};
`;

const GreyBreakLine = styled.div`
  display: block;
  position: relative;
  width: 100%;
  height: 1px;
  margin: 5.6rem 0;
  background-color: ${({ theme: { colors } }) => colors.footer.border};
  ${media.mobileMax`
    display: none;
  `};
`;

const FooterLink = styled(Link)`
  color: ${props => props.theme.colors.header.color};
  :hover {
    color: ${props => props.theme.colors.primary};
    text-shadow: 0 0 1px;
  }
`;

const FooterItem = styled.li`
  ${media.mobileMax`
  width: max-content;
  margin-right: 0;
  padding: 1rem 2rem;
  `};

  ${media.tabletMax`
  padding: 0;
  margin-right: 3rem;
  `};

  padding: 0.8rem 0px;
  display: flex;
  justify-content: center;
  width: 15.1rem;
  height: 4rem;
`;

const CopyrightBox = styled.p`
  margin: 4rem 0 3.2rem 0;
  color: ${({ theme: { colors } }) => colors.base150};

  ${media.mobileMax`
    margin: 0;
    order: 3;
  `};

  ${media.tabletMax`
    margin-left: auto;
  `};
`;

const RodoBox = styled.div`
  color: ${({ theme: { colors } }) => colors.base150};
  font-size: 1.2rem;
  text-align: center;
  margin-bottom: 1.6rem;
  ${media.tabletMax`
    text-align: left;
    font-size: 1.1rem;
  `};
`;

const FooterCta = styled.div`
  background: ${props => props.theme.colors.footer.ctaBackground};
  clip-path: ellipse(129% 106% at 50% 110%);
  padding: 7rem 2rem 2rem;
  ${media.desktop`
    padding: 10rem 0;
  `}
`;

const StyledHeading = styled(Heading)`
  text-align: center;
  font-size: 2rem;
  line-height: 3.9rem;
  ${media.desktop`
    font-size: 3.2rem;
  `}
`;

const StyledButton = styled(Button)`
  margin: 5rem auto;
  display: flex;
  padding: 0.9rem 8.5rem;
  font-size: 1.6rem;
  line-height: 2rem;
`;

const FooterSection = styled(PageSection)`
  margin-bottom: 0;
  > div {
    padding: 0 2rem;
    ${media.xUltraWide`
    padding: 0;
  `}
  }
`;

const ReviewItem = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 12rem;
  height: 8.6rem;
  color: ${({ theme: { colors } }) => colors.base150};
  border: 1px ${({ theme: { colors } }) => colors.outlineGrey} solid;
  border-radius: 2px;
  text-decoration: none;
  transition: all 0.3s linear;

  &:hover {
    background-color: ${({ theme: { colors } }) => colors.outlineGrey};
  }

  p {
    font-size: 1.2rem;
    line-height: 1.2rem;
    margin-left: 3px;
  }
`;

const RatingWrapper = styled.div`
  display: flex;
  margin-top: 1rem;
  height: 9px;
  img {
    width: 8.5px;
    margin-right: 3px;
  }
  p {
    margin-top: 0;
  }
`;

const Footer = ({ headings, buttonTexts }) => {
  const { getActiveStyleForPathname } = useActiveMenuStyles();
  const { isInPoland } = useContext(CountryContext);

  const onSubmitContactForm = () => {};

  const [, showContactModal] = useModal(ContactModal, {
    onSubmitContactForm,
    alwaysHideOnSubmit: true,
  });

  function openContactModal() {
    showContactModal();
  }

  const utmCampaignName = utmCampaignNames.FOOTER_BUTTON;
  const contactButtonAction = isInPoland
    ? () => navigateToWebsiteCareer(utmCampaignName)
    : openContactModal;
  return (
    <>
      <FooterCta>
        <StyledHeading as="h3">
          {isInPoland ? headings[0] : headings[1]}
        </StyledHeading>
        <StyledButton variant="cta" size="cta" onClick={contactButtonAction}>
          {isInPoland ? buttonTexts[0] : buttonTexts[1]}
        </StyledButton>
      </FooterCta>
      <FooterSection>
        <FooterContainer>
          <OfficeHeader>Our offices are waiting for you in:</OfficeHeader>
          <OfficesContainer>
            <OfficesWrapper>
              <OfficeItem>
                <h5>Wrocław, PL (HQ)</h5>
                <p>ul. Krupnicza 13, 50-075 Wrocław</p>
              </OfficeItem>
              <OfficeItem>
                <h5>Szczecin, PL</h5>
                <p>
                  ul. Wielka Odrzańska 26,
                  {' 70-535 Szczecin'}
                </p>
              </OfficeItem>
              <OfficeItem>
                <h5>Kielce, PL</h5>
                <p>ul. Gabrieli Zapolskiej 45B, 25-435 Kielce</p>
              </OfficeItem>
              <OfficeItem>
                <h5>Austin, U.S.</h5>
                <p>Austin, TX United States</p>
              </OfficeItem>
            </OfficesWrapper>
            <ReviewsWrapper>
              {ratings.map(rating => (
                <ReviewItem
                  href={rating.url}
                  title={rating.title}
                  target="_blank"
                  rel="noreferrer"
                  key={rating.title}
                >
                  <a
                    href={rating.url}
                    title={rating.title}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={rating.logo} alt={rating.title} />
                  </a>
                  {rating.score && (
                    <RatingWrapper>
                      <StarRating />
                      <p>{rating.score}</p>
                    </RatingWrapper>
                  )}
                </ReviewItem>
              ))}
            </ReviewsWrapper>
          </OfficesContainer>
        </FooterContainer>
        <FooterNavigationWrapper>
          <GreyBreakLine />
          <Link
            to="/"
            href={config.env.masterbornWebsite}
            title="Masterborn.com"
          >
            <StyledLogo src={MBLogoGray} />
          </Link>
          <FooterNavigation>
            <FooterItem>
              <FooterLink title="Home" href={config.env.masterbornWebsite}>
                Home
              </FooterLink>
            </FooterItem>
            <FooterItem>
              <FooterLink title="About Us" href="/about/">
                About Us
              </FooterLink>
            </FooterItem>
            <FooterItem>
              <FooterLink
                title="Blog"
                href="/blog/"
                style={getActiveStyleForPathname('/blog', 'footer')}
              >
                Blog
              </FooterLink>
            </FooterItem>
            <FooterItem>
              <FooterLink title="Career" href="/career/">
                Career
              </FooterLink>
            </FooterItem>
          </FooterNavigation>
          <CopyrightBox>
            Copyright © MasterBorn 2016 -{` ${new Date().getFullYear()}`}
          </CopyrightBox>
        </FooterNavigationWrapper>
        <RodoBox>
          <Content mb={0} mt={0}>
            The Administrator of your data is MasterBorn, with its registered
            office in Wroclaw, Krupnicza 13, Wroclaw. If you want to withdraw,
            get an insight or update information about you, then contact us:{' '}
            <a href="mailto:contact@masterborn.com">contact@masterborn.com</a>
          </Content>
        </RodoBox>
      </FooterSection>
    </>
  );
};

Footer.propTypes = {
  headings: PropTypes.arrayOf(PropTypes.string),
  buttonTexts: PropTypes.arrayOf(PropTypes.string),
};

Footer.defaultProps = {
  headings: [
    'We build valuable, JavaScript products for U.S. based companies',
    'Build your next innovative JavaScript product with us',
  ],
  buttonTexts: ['Join us!', "Let's talk!"],
};

export default Footer;
