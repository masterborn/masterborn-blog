import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import Link from '../Link';
import useActiveMenuStyles from '../../hooks/useActiveMenuStyles';
import config from '../../../config';
import navigateToWebsiteCarrier from '../../utils/navigateToWebsiteCarrier';
import ContactModal from '../ContactModal';
import useModal from '../../hooks/useModal';
import { media } from '../../utils/emotion';
import { CountryContext } from '../../contexts/CountryContext';

import ContactButton from './ContactButton';

const MenuLink = styled(Link)`
  color: ${props => props.theme.colors.header.color};
  margin: 2rem 0;
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
  ${media.desktop`
    margin: 2rem;
    font-size: 1.6rem;
    line-height: 2rem;
  `}
`;

const MenuItems = ({ isCollapsedHeader, onClickItem, contactAsButton }) => {
  const { getActiveStyleForPathname } = useActiveMenuStyles();
  const { isInPoland } = useContext(CountryContext);

  const LinkFontSize = 3;
  const contactButtonText = isInPoland ? 'Join us' : 'Contact us';
  const onSubmitContactForm = () => {}

  const [, showContactModal] = useModal(ContactModal, { onSubmitContactForm, alwaysHideOnSubmit: true });


  function openContactModal () {
    showContactModal();
  };

  const contactButtonAction = isInPoland ? navigateToWebsiteCarrier : openContactModal;

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
        onClick={contactButtonAction}
        linkFontSize={LinkFontSize}
      >{contactButtonText}
      </ContactButton>
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