import { space, color, typography } from 'styled-system';
import styled from 'styled-components';

const Text = styled.p(space, color, typography);
Text.defaultProps = {
  mt: 0,
  fontFamily: 'body',
  lineHeight: 'body',
  mb: 3,
  fontWeight: 'body',
  fontSize: 'body',
  color: 'text',
};
Text.displayName = 'Text';

export default Text;
