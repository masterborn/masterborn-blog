import { lighten } from 'polished';

import defaultTheme from './defaultTheme';

const colors = {
  dark: '#242A31',
  background: '#fff',
  accentBackground: '#E6ECF1',
  icon: '#9DAAB6',
  heading: '#131313',
  text: '#616161',
  menuText: '#7A8895',
  menuTextActive: '#242A31',
  code: '#3C454E',
  primary: '#ffcc02',
  dirtyPrimary: '#ffcc02',
  accent: '#EC432D',
  accentHover: '#FF2D11',
  accentActive: '#BF3B2C',
  secondary: '#e9f7fc',
  caption: '#7A8895',
  white: '#fff',
  blogTextBackground: '#fff',
  inputBackground: '#F5F7F9',
  inputBorder: '#E3E8EE',
  inputText: '#0A1A2B',
  inputPlaceholder: '#A2B6C7',
  modalBackground: 'rgba(0,0,0,0.3)',
  modalShadow: 'rgba(60,69,78,0.8)',
  dropdownMenuBackground: '#fff',
  dropdownMenuItemHover: '#F5F7F9',
  dropdownMenuBorder: '#E6ECF1',
  dropdownMenuShadow: 'rgba(116,129,141,0.1)',
  button: {
    primaryShadow: 'rgba(255,204,2,0.4)',
    primaryOutlineHover: '#e2b500',
    primaryActive: '#fff',
    whiteActiveBackground: '#E6E8EA',
    secondaryHover: '#00BAEA',
    secondaryActive: '#9DDFF2',
    secondaryText: '#25B8E4',
    linkText: '#7A8895',
  },
  link: {
    default: '#7A8895',
    hover: '#242A31',
    active: '#3C454E',
  },
  search: {
    resultBoxBorder: '#E6ECF1',
    resultBoxShadow: 'rgba(116,129,141,0.1)',
    resultItemHover: '#F5F7F9',
    resultText: '#A2B6C7',
    resultsCountText: '#D4DDE5',
    resultsDividerColor: '#F5F7F9',
    caption: '#A2B6C7',
  },
  tableOfContent: {
    separatorBorder: '#E6ECF1',
    itemColorActive: '#222222',
    itemColor: '#747373',
  },
  mobileMenuItemDivider: '#E6ECF1',
  githubStarButton: {
    icon: '#FFB900',
  },
  badge: {
    defaultText: '#A2B6C7',
    defaultBorder: '#D4DDE5',
    defaultBackground: '#F5F7F9',
  },
  header: {
    headerBorderColor: '#F0F0F0',
    color: '#222222',
  },
  contactButton: {
    borderColor: '#F7CA18',
  },
  authorHeader: {
    author: '#131313',
    authorDate: '#6B6B6B',
  },
  footer: {
    header: '#9F9C9C',
    officeHeader: '#3F3F3F',
    officeText: '#222222',
    reviewScore: '#9F9F9F',
    border: '#F0F0F0',
    copyright: '#A2A2A2',
    rodo: '#F7F7F7',
  },
};

/* eslint-disable prefer-destructuring */
const fontSizes = Object.assign(
  [...defaultTheme.fontSizes],
  defaultTheme.fontSizes
);

const lightTheme = {
  ...defaultTheme,
  fontSizes,
  name: 'light',
  colors: {
    ...defaultTheme.colors,
    ...colors,
  },
  custom: {
    ...defaultTheme.custom,
    sidebar: {
      ...defaultTheme.custom.sidebar,
      backgroundColor: 'white',
      itemColor: '#7A8895',
      itemColorActive: colors.heading,
      customScrollTruckColor: lighten(0.25, '#a4a9bf'),
      customScrollThumbColor: '#a4a9bf',
    },
    button: {
      ...defaultTheme.custom.button,
      textColor: 'white',
    },
    menu: {
      ...defaultTheme.custom.menu,
      textColor: '#7A8895',
    },
    code: {
      ...defaultTheme.custom.code,
      backgroundColor: '#F5F7F9',
    },
    table: {
      ...defaultTheme.custom.table,
      accentColor: '#F5F7F9',
    },
  },
};

export default lightTheme;
