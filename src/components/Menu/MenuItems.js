import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import Link from '../Link';
import useActiveMenuStyles from '../../hooks/useActiveMenuStyles';
import config from '../../../config';
import ContactModal from '../ContactModal';
import useModal from '../../hooks/useModal';

import ContactButton from './ContactButton';

const MenuLink = styled(Link)`
  color: ${props => props.theme.colors.header.color};
  margin: 2rem;
  padding: 1rem 0;
  transition: all .3s;
  border-bottom: 2px solid transparent;
  :hover {
    color: ${props => props.theme.colors.menuTextActive};
    fontw-weight: ${props => props.theme.fontWeights.heading};
    border-bottom: 2px solid ${ props => props.theme.colors.primary};
    svg {
      color: ${props => props.theme.colors.link.hover};
    }
  }
`;

const MenuItems = ({ isCollapsedHeader, onClickItem, contactAsButton }) => {
  const { getActiveStyleForPathname } = useActiveMenuStyles();
  const LinkFontSize = 3;

  const [, showContactModal, hideContactModal] = useModal(ContactModal, { onSubmitContactForm });

  function onSubmitContactForm() {
    hideContactModal();
  }

    const openContactModal = () => {
    showContactModal();
  };

  return (
    <>
      <MenuLink
        fontSize={LinkFontSize}
        onClick={onClickItem}
        title="Home"
        href={config.env.masterbornWebsite}
      >
        Home
      </MenuLink>
      <MenuLink
        fontSize={LinkFontSize}
        onClick={onClickItem}
        title="About Us"
        href="/about"
      >
        About Us
      </MenuLink>
      <MenuLink
        fontSize={LinkFontSize}
        onClick={onClickItem}
        title="Career"
        href="/career"
      >
        Career
      </MenuLink>
      <MenuLink
        fontSize={LinkFontSize}
        onClick={onClickItem}
        style={getActiveStyleForPathname('/blog')}
        title="Blog"
        href="/blog"
      >
        Blog
      </MenuLink>
      <ContactButton
        contactAsButton={contactAsButton}
        isCollapsedHeader={isCollapsedHeader}
        onClick={openContactModal}
        linkFontSize={LinkFontSize}
      />
    </>
  );
};

MenuItems.propTypes = {
  isCollapsedHeader: PropTypes.bool,
  onClickItem: PropTypes.func,
  contactAsButton: PropTypes.bool,
};

MenuItems.defaultProps = {
  isCollapsedHeader: false,
  contactAsButton: true,
  onClickItem() {},
};

export default MenuItems;