import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import LogoLink from './LogoLink';
import mixins from '../styles/mixins';
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

  nav {
    display: inline-block;
    position: relative;
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
      </div>
    </HeaderStyles>
  );
}

export default Header;
