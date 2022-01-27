import isBrowser from './isBrowser';

export const BREAKPOINTS = {
  phone: 540,
  tablet: 720,
  mobileMax: 767, //website compatible breakpoints
  desktop: 960,
  ultraWide: 1140,
  tabletMax: 1200, // ^^ same as above
  xUltraWide: 1580,
  fourK: 1960,
};

export const matchBreakpoint = breakpoint => {
  return isBrowser
    ? window.matchMedia(`(min-width: ${BREAKPOINTS[breakpoint]}px)`).matches
    : false;
};

export const matchBreakpointDown = breakpoint => {
  return isBrowser
    ? window.matchMedia(`(max-width: ${BREAKPOINTS[breakpoint] - 1}px)`).matches
    : false;
};

export default {
  BREAKPOINTS,
  matchBreakpointDown,
  matchBreakpoint,
};
