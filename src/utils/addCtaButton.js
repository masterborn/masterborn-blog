const addCtaButton = node => {
  const CTA_BUTTON = '\n\n <CtaComponent /> \n\n'

  const middleIndex = parseInt(node.rawBody.length / 2, 10);
  const headerIndex = node.rawBody.indexOf('\n## ', middleIndex);
  // eslint-disable-next-line no-param-reassign
  node.rawBody = [node.rawBody.slice(0, headerIndex), CTA_BUTTON , node.rawBody.slice(headerIndex)].join('');
}

module.exports = addCtaButton;
