import styled from '@emotion/styled';

import CircleIcon from '../CircleIcon';
import { FAILED_MODAL, SUCCESS_MODAL } from '../../contexts/InfoModalContext';

const getIconBorderColor = (props) => {
  switch (props.type) {
    case SUCCESS_MODAL:
      return props.theme.colors.primary;
    case FAILED_MODAL:
      return props.theme.colors.alizarinCrimson;
    default:
      return props.theme.colors.negative;
  }
};

const ModalIcon = styled(CircleIcon)`
  margin-top: 3rem;
  border-color: ${getIconBorderColor};

  &::after {
    background-size: 2.5rem 2.5rem;
  }
`;

export default ModalIcon;
