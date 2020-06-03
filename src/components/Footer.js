import React from 'react';
import styled from '@emotion/styled';
import { lighten } from 'polished';

import { media } from '../utils/emotion';

import PageSection from './pages/PageSection';
import Link from './Link';
import Caption from './Caption';
import Logo from './Logo';
import Text from './Text';

const FooterGrid = styled.div`
  padding-top: ${props => props.theme.space.xLarge};
  border-top: 1px solid ${props => lighten(0.28, props.theme.colors.icon)};
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  grid-row-gap: 4rem;
  grid-template-areas:
    'logo'
    'address'
    'copyright'
    'info';
  ${media.tablet`
    grid-template-columns: 1fr 2fr;
    grid-template-areas:
    "logo address"
    "copyright copyright"
    "info info";
  `};
`;

const InfoBox = styled.div`
  grid-area: info;
`;

const LogoContainer = styled.div`
  grid-area: logo;
  text-align: center;
  ${media.tablet`
    text-align: left;
  `};
`;

const AddressContainer = styled.div`
  display: grid;
  grid-column-gap: 2rem;
  grid-template-columns: auto auto;
  flex: 1;
  align-items: flex-start;
  justify-content: center;
  grid-area: address;
  ${media.tablet`
    align-items: flex-start;
    justify-content: flex-start;
  `};
`;

const CopyrightContainer = styled.div`
  grid-area: copyright;
  display: flex;
`;

const StyledCaption = styled(Caption)`
  opacity: 0.5;
`;

const Footer = () => {
  return (
    <PageSection mb={3} mt={4}>
      <FooterGrid>
        <LogoContainer>
          <Logo height="4.8rem" alt="Ockam logo" />
        </LogoContainer>
        <AddressContainer>
          <div>
            <Text fontSize="small" fontWeight="bold">
              Address
            </Text>
            <Text fontSize="small">
              MasterBorn Sp. z o.o. <br />
              ul. Krupnicza 13, <br />
              50-075 Wrocław <br />
              Tax ID: 8992816601
            </Text>
          </div>
          <div>
            <Text fontSize="small" fontWeight="bold">
              Contact
            </Text>
            <Text fontSize="small">
              <Link to="mailto:contact@masterborn.com">
                contact@masterborn.com
              </Link>
            </Text>
          </div>
        </AddressContainer>
        <CopyrightContainer>
          <Caption>Copyright © MasterBorn 2016 -2020</Caption>
          <Link fontSize="caption" ml="auto" href="/privacy">
            Privacy Policy
          </Link>
        </CopyrightContainer>
        <InfoBox>
          <StyledCaption>
            The Administrator of your data is MasterBorn, with its registered
            office in Wroclaw, Krupnicza 13. If you want to withdraw, get an
            insight or update information about you, then contact us:
            contact@masterborn.com
          </StyledCaption>
        </InfoBox>
      </FooterGrid>
    </PageSection>
  );
};

export default Footer;
