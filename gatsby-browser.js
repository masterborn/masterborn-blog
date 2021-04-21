import React, {useEffect, useContext} from 'react';
import axios from 'axios';

import config from './config';
import { EmailProvider } from './src/contexts/EmailContext';
import { InfoModalProvider } from './src/contexts/InfoModalContext';
import { CountryContextProvider, CountryContext } from './src/contexts/CountryContext';

function scrollToAnchor(location) {
  // Check for location so build does not fail
  const HEADER_OFFEST = 96;
  if (location && location.hash) {
    const item = document.querySelector(`${location.hash}`);
    if (!item) return;
    const rect = item.getBoundingClientRect();
    const topOffset = rect.top + window.scrollY;
    const offsetTop = topOffset - item.offsetHeight - HEADER_OFFEST;
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth',
    });
  }
}

const CountryContextWrapper = ({ element }) => {
  // not sure why, but I cannot run hooks inside wrapRootElement
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
  return element
}

export const wrapRootElement = ({ element }) => {
  return (
    <CountryContextProvider>
      <EmailProvider>
        <InfoModalProvider>
          <CountryContextWrapper element={element} />
        </InfoModalProvider>
      </EmailProvider>
    </CountryContextProvider>
);
}


export const onRouteUpdate = ({ location }) => scrollToAnchor(location);
