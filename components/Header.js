import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import LogoLink from './LogoLink';
import MenuButton from './MenuButton';
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

  a:first-of-type {
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

const Header = () => {
  return (
    <HeaderStyles>
      <div className="wrap">
        <LogoLink />
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
        <MenuButton />
      </div>
    </HeaderStyles>
  );
}

export default Header;
