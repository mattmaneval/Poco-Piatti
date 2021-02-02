import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Facebook from './icons/Facebook';
import Instagram from './icons/Instagram';
import mixins from '../styles/mixins';
import theme from '../styles/theme';
const { color, fonts, space } = theme;

const MobileMenuStyles = styled.div`
  width: 100%;
  background-color: ${color.background};
  height: 100vh;
  transform: ${({ menu }) => menu ? 'translateX(0)' : 'translateX(100%)'};
  opacity: ${({ menu }) => menu ? '1' : '0'};
  transition: all 0.9s;
  padding: 6em 2em;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    background-color: ${color.backgroundTert};
  }

  .mobile-nav {
    display: inline-block;
    margin-bottom: ${space.halfSpace};

    a {
      color: ${color.foreground};
      display: block;
      padding: ${space.halfSpace} 0;
      font-size: 1.65rem;
      letter-spacing: 0.12em;
    }
  }

  .mobile-menu-contact {
    margin-bottom: ${space.space};

    h3 {
      margin-bottom: ${space.space};
    }

    a {
      color: ${color.foregroundDim};
      font-family: ${fonts.font};
      line-height: 140%;
      font-size: 1.25em;
      letter-spacing: 0.05rem;
      display: block;
      padding: 0 0 ${space.quarterSpace} 0;
    }
  }

  .mobile-menu-socials {
    display: inline-block;
    position: relative;
    transform: translateX(-1.3em);

    svg {
      color: ${color.foregroundDim};
    }
  }
`;

const MobileMenu = (props) => {
  return (
      <MobileMenuStyles menu={props.menu}>
        <nav className="mobile-nav">
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
        <div className="mobile-menu-contact">
          <h3>Poco Piatti</h3>
          <a href="tel:419-931-0281">419-931-0281</a>
          <a href="mailto:pocopiattiparty@gmail.com">pocopiattiparty@gmail.com</a>
        </div>
        <div className="mobile-menu-socials">
          <Facebook />
          <Instagram />
        </div>
      </MobileMenuStyles>
  );
}

export default MobileMenu;
