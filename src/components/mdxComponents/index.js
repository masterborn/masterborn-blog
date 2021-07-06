import React from 'react';
import PropTypes from 'prop-types';

import Image from '../Image';

import Heading from './Heading';
import Text from './Text';
import Code from './Code';
import CodeBlock from './CodeBlock';
import Pre from './Pre';
import AnchorTag from './Anchor';
import Blockquote from './Blockqute';
import Hr from './Hr';
import List from './List';
import ListOrdered from './ListOrdered';
import Table from './Table';
import Strong from './Strong';
import CtaArticleComponent from './CtaArticleComponent';

import utmCampaignNames from '../../utils/utmCampaignNames';

const HeadingComponent = (props, size) => (
  <Heading {...props} as={size} linked>
    {props.children}
  </Heading>
);

const generateHeading = size => props => HeadingComponent(props, size);

const utmCampaignName = utmCampaignNames.POST_CTA;

HeadingComponent.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, null]).isRequired,
};

export default {
  h1: generateHeading('h1'),
  h2: generateHeading('h2'),
  h3: generateHeading('h3'),
  h4: generateHeading('h4'),
  h5: generateHeading('h5'),
  h6: generateHeading('h6'),
  p: props => <Text {...props} lineHeight="2.6rem" mt={4} mb={4} opacity={0.9} fontSize={2} fontWeight={1} />,
  pre: Pre,
  code: CodeBlock,
  strong: Strong,
  inlineCode: props => <Code {...props} />,
  a: props => <AnchorTag {...props} />,
  ul: props => <List {...props} />,
  ol: props => <ListOrdered {...props} />,
  img: props => <Image {...props} />,
  table: props => <Table {...props} mb={4} />,
  blockquote: props => <Blockquote {...props} />,
  hr: props => <Hr {...props} />,
  CtaComponent: props => <CtaArticleComponent {...props} utmCampaign={utmCampaignName} />,
};
