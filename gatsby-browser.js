import React from 'react';

import { EmailProvider } from './src/contexts/EmailContext';
import { InfoModalProvider } from './src/contexts/InfoModalContext';

function scrollToAnchor(location) {
  // Check for location so build does not fail
  const HEADER_OFFEST = 96;
  if (location && location.hash) {
    const item = document.querySelector(`${CSS.escape(location.hash)}`);
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

export const wrapRootElement = ({ element }) => (
  <EmailProvider>
    <InfoModalProvider>
      {element}
    </InfoModalProvider>
  </EmailProvider>
)


export const onRouteUpdate = ({ location }) => scrollToAnchor(location);
