const insertSubstringAtIndex = (string, substring, index) => {
  return [string.slice(0, index), substring , string.slice(index)].join('');
}

const addCtaButton = node => {
  const CTA_BUTTON = '\n\n <CtaComponent /> \n\n'

  const middleIndex = parseInt(node.rawBody.length / 2, 10);
  const firstHeaderInSecondHalfIndex = node.rawBody.indexOf('\n## ', middleIndex);
  // eslint-disable-next-line no-param-reassign
  node.rawBody = insertSubstringAtIndex(node.rawBody, CTA_BUTTON, firstHeaderInSecondHalfIndex);
}

module.exports = addCtaButton;
