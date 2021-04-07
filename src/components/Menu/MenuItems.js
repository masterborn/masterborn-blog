import React from 'react';
import PropTypes from 'prop-types';

import Link from '../Link';
import useActiveMenuStyles from '../../hooks/useActiveMenuStyles';
import config from '../../../config';

import ContactButton from './ContactButton';


const MenuItems = ({ isCollapsedHeader, onClickItem, contactAsButton }) => {
  const { getActiveStyleForPathname } = useActiveMenuStyles();
  const LinkFontSize = isCollapsedHeader ? 1 : 2;

  console.log(getActiveStyleForPathname('/blog'));


  return (
    <>
      <Link
        fontSize={LinkFontSize}
        onClick={onClickItem}
        title="Home"
        href={config.env.masterbornWebsite}
      >
        Home
      </Link>
      <Link
        fontSize={LinkFontSize}
        onClick={onClickItem}
        title="About Us"
        href="/about"
      >
        About Us
      </Link>
      <Link
        fontSize={LinkFontSize}
        onClick={onClickItem}
        title="Career"
        href="/career"
      >
        Career
      </Link>
      <Link
        fontSize={LinkFontSize}
        onClick={onClickItem}
        style={getActiveStyleForPathname('/blog')}
        title="Blog"
        href="/blog"
      >
        Blog
      </Link>
      <ContactButton
        href="/#contact"
        contactAsButton={contactAsButton}
        isCollapsedHeader={isCollapsedHeader}
        onClick={onClickItem}
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
