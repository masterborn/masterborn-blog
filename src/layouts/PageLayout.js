import React, { useContext, useEffect } from 'react';
import axios from 'axios';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { Global } from '@emotion/core';

import { media } from '../utils/emotion';
import { CountryContext } from '../contexts/CountryContext';
import config from '../../config';
import normalizeCss from '../theme/normalizeCss';
import globalStyles from '../theme/globalStyles';
import ThemeProvider from '../components/themeProvider';
import Header from '../components/header/Header';
import Content from '../components/pages/Content';
import Footer from '../components/Footer';
import { LocationContextProvider } from '../contexts/LocationContext';
import { ModalContextProvider } from '../contexts/ModalContext';
import InfoModal from '../components/InfoModal'

const PageWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  display: flex;
  position: relative;
  flex-direction: column;
  min-height: 100vh;
  color: ${({ theme }) => theme.colors.text};

  body {
    font-size: ${props => props.theme.fontSizes.body};
  }
`;

const HeaderWrapper = styled.div`
  z-index: 10;
  position: relative;
  width: 100%;
  background-color: transparent;
`;

const StickyMenuWrapper = styled(HeaderWrapper)`
  position: fixed;
  top: 0;
  background-color: ${props => props.theme.colors.white};
  border: 1px solid  ${props => props.theme.colors.header.headerBorderColor};
  padding: 2rem 0;
  ${media.desktop`
    padding: 1rem 0;
  `}
`;

const PageLayout = ({ children, themeName, location }) => {
  const { setCountry } = useContext(CountryContext);
  const { url, countryCode } = config.custom.localization;

  useEffect(() => {
    axios.get(url)
      .then((response) => {
        const { country } = response.data;
        const isSameCountry = country === countryCode;
        setCountry(isSameCountry)
      });
  }, [])

  return (
    <ThemeProvider themeName={themeName}>
      <ModalContextProvider>
        <LocationContextProvider location={location}>
          <PageWrapper>
            <Global styles={normalizeCss} />
            <Global styles={globalStyles} />
            <InfoModal />
            <StickyMenuWrapper>
              <Content>
                <Header isCollapsedHeader />
              </Content>
            </StickyMenuWrapper>
            {children}
            <Footer />
          </PageWrapper>
        </LocationContextProvider>
      </ModalContextProvider>
    </ThemeProvider>
  );
};

PageLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
  location: PropTypes.shape({}).isRequired,
  themeName: PropTypes.string,
};

PageLayout.defaultProps = {
  themeName: 'blog',
};

export default PageLayout;
