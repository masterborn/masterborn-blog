import { css } from '@emotion/react';

const globalStyles = css`
  html {
    font-size: 62.5%;
  }
  body {
    font-size: 1.6rem;
    text-rendering: optimizeLegibility;
    font-family: 'Inter', sans-serif;
  }
  * {
    box-sizing: border-box;
  }

  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    vertical-align: baseline;
  }
  ol,
  ul {
    list-style: none;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  a {
    text-decoration: none;
    color: inherit;
    outline: none;
  }
  p {
    font-weight: 400;
  }
  code {
    font-family: 'Inter', sans-serif;
  }

  input {
    font-family: inherit;
    font-size: inherit;
    outline: none;
  }
  button {
    font-family: inherit;
    font-size: inherit;
    border: none;
    outline: none;
    cursor: pointer;
  }

  .rwd-container {
    position: relative;
    overflow: hidden;
    padding-top: 56.25%;
  }

  .rwd-iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0;
  }
`;

export default globalStyles;
