import React, { useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import LogoLink from './LogoLink';
import MenuButton from './MenuButton';
import MobileMenu from './MobileMenu';
import mixins from '../styles/mixins';
import media from '../styles/media';
import theme from '../styles/theme';
const { color, fonts, space } = theme;

const HeaderStyles = styled.header`
  padding: ${space.halfSpace} 0;
  background-color: ${color.foreground};
  width: 100%;

  .wrap {
    ${mixins.wrap};
    ${mixins.flexBetween};
  }

  .header-logo {
    transform: translateX(-1.6rem);
  }

  nav {
    display: inline-block;
    position: relative;

    @media ${media.primary} {
      display: none;
    }
  }

  a {
    ${mixins.animate};
    font-family: ${fonts.heading};
    color: ${color.background};
    padding: ${space.halfSpace};
    font-size: 1.25rem;

    &:hover {
      color: ${color.backgroundTert};
    }
  }
`;

function Header() {

  const [menu, active] = useState(false);

  function handleClick() {
    menu ? active(false) : active(true);
  }

  return (
    <HeaderStyles menu={menu}>
      <div className="wrap">
        <LogoLink className="header-logo"/>
        <nav>
          <Link href="/about">
            <a>Menu</a>
          </Link>
          <Link href="/about">
            <a>Catering</a>
          </Link>
          <Link href="/about">
            <a>Private Events</a>
          </Link>
          <Link href="/about">
            <a>About</a>
          </Link>
          <Link href="/about">
            <a>Contact</a>
          </Link>
        </nav>
        <MenuButton menu={menu} onClick={handleClick} />
        <MobileMenu menu={menu} />
      </div>
    </HeaderStyles>
  );
}

export default Header;
