import { useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Logo from './icons/Logo';
import GlobalHeader from './GlobalHeader';
import MenuButton from './navigation/MenuButton';
import MobileMenu from './navigation/MobileMenu';
import mixins from '../styles/mixins';
import media from '../styles/media';
import theme from '../styles/theme';

const { color, fonts, space } = theme;

const HeaderStyles = styled.header`
  padding: 3rem 0;
  /* position: absolute; */
  width: 100%;
  z-index: 10;

  .wrap {
    ${mixins.flexBetween};
  }

  .header-logo {
    transform: translateX(-1em);
    width: 12em;


    @media ${media.primary} {
      width: 8em;
    }
  }

  .header-links {

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
    color: ${color.foreground};
    padding: ${space.halfSpace};
    font-size: 1.25rem;
    letter-spacing: 0.15em;

    &:hover {
      color: ${color.backgroundTert};
    }
  }
`;

function Header() {
  const [menu, active] = useState(false);

  const handleClick = () => (menu ? active(false) : active(true));

  return (
    <HeaderStyles menu={menu}>
      <div className="wrap">
        <div className="header-logo">
          <Logo />
        </div>
        <div className="header-links">
          <GlobalHeader />
          <nav>
            <Link href="/">
              <a>Home</a>
            </Link>
            <Link href="/menu">
              <a>Menu</a>
            </Link>
            <Link href="/catering">
              <a>Catering</a>
            </Link>
            <Link href="/private-events">
              <a>Private Events</a>
            </Link>
            <Link href="/about">
              <a>About</a>
            </Link>
          </nav>
          <MenuButton menu={menu} onClick={handleClick} />
        </div>
      </div>
      <MobileMenu menu={menu} />
    </HeaderStyles>
  );
}

export default Header;
