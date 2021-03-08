import React, { useState } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import MenuIcon from 'emotion-icons/feather/Menu';
import CrossIcon from 'emotion-icons/feather/X';

import { media } from '../../utils/emotion';
import config from '../../../config';
import Menu from '../Menu/Menu';
import ToggleIcon from '../ToggleIcon';
import MobileMenu from '../Menu/MobileMenu';
import Icon from '../Icon';
import Logo from '../Logo';

import Container from './HeaderContainer';

const StyledLink = styled.a`
  margin-left: auto;
  margin-right: auto;
  ${media.desktop`
    margin-left: initial;
    margin-right: initial;
  `}
`;

const ToggleMenuButton = styled(ToggleIcon)`
  color: ${({ theme }) => theme.colors.icons};
  display: flex;
  align-items: center;
  justify-content: center;
  ${media.desktop`
    display: none;
  `}
`;

const BurgerIcon = () => <Icon icon={MenuIcon} size={28} />;
const CloseIcon = () => <Icon icon={CrossIcon} size={28} />;

const Header = ({ isCollapsedHeader }) => {
  const [isVisibleMobileMenu, setIsVisibleMenu] = useState(false);
  const toggleMobileMenu = () => setIsVisibleMenu(state => !state);
  return (
    <Container isCollapsedHeader={isCollapsedHeader}>
      <StyledLink href={config.env.masterbornWebsite} title="Masterborn.com">
        <Logo height={isCollapsedHeader ? '3rem' : undefined} />
      </StyledLink>
      <ToggleMenuButton
        CollapsedIcon={BurgerIcon}
        UncollapsedIcon={CloseIcon}
        isCollapsed={!isVisibleMobileMenu}
        onClick={toggleMobileMenu}
      />
      <>
        <Menu isCollapsedHeader={isCollapsedHeader} />

        <MobileMenu
          onClickItem={toggleMobileMenu}
          isVisible={isVisibleMobileMenu}
          isCollapsedHeader={isCollapsedHeader}
        />
      </>
    </Container>
  );
};

Header.propTypes = {
  isCollapsedHeader: PropTypes.bool,
};
Header.defaultProps = {
  isCollapsedHeader: false,
};

export default Header;
