import React from 'react';
import styled from 'styled-components';
import { css } from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import Facebook from './icons/Facebook';
import Instagram from './icons/Instagram';
import mixins from '../styles/mixins';
import theme from '../styles/theme';
import media from '../styles/media';
const { color, fonts, space } = theme;

const footerLink = {
  hover: css`
    ${mixins.animate};

    &:hover {
      color: ${color.backgroundTert};
    }
  `,
}

const FooterStyles = styled.footer`
  ${mixins.section};

  .wrap {
    ${mixins.wrap};
    display: flex;

    @media ${media.primary} {
      flex-direction: column;
    }
  }

  .footer-contact {
    width: 24em;

    a {
      ${footerLink.hover};
      color: ${color.foregroundDim};
      font-family: ${fonts.font};
      line-height: 140%;
      font-size: 1.25em;
      letter-spacing: 0.05rem;
      display: block;
    }

    @media ${media.primary} {
      margin-bottom: 3.5rem;
    }
  }

  nav {
    display: inline-block;
    position: relative;
    columns: 2 12em;

    @media ${media.primary} {
      columns: 1 auto;
      margin-bottom: ${space.space};
    }

    a {
      ${footerLink.hover};
      display: block;
      font-family: ${fonts.heading};
      color: ${color.foreground};
      padding-bottom: 0.65rem;
      font-size: 1.65rem;
      line-height: 160%;
      letter-spacing: 0.12em;
      break-inside: avoid;
    }
  }

  .footer-socials a {
    ${footerLink.hover};
    display: inline-block;
    position: relative;
    padding: ${space.halfSpace};
    transform: translateY(-0.6em);
    color: ${color.foregroundDim};

    @media ${media.primary} {
      transform: translateY(0);
      transform: translateX(-1.3em);
    }
  }

  .copyright,
  .copyright a {
    font-family: ${fonts.heading};
    font-size: 1.1rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: ${color.foregroundDim};

    a {
      display: inline-block;
      color: ${color.backgroundTert};
      text-decoration: underline;
      padding-bottom: 0;
    }
  }

  .copyright {
    padding: ${space.space} 0;
    ${mixins.wrap};
  }
`;

const year = new Date().getFullYear();

const Footer = () => {
  return (
    <FooterStyles>
      <div className="wrap">
        <div className="footer-contact">
          <h3>Poco Piatti</h3>
          <a href="tel:419-931-0281">419-931-0281</a>
          <a href="mailto:pocopiattiparty@gmail.com">pocopiattiparty@gmail.com</a>
        </div>
        <nav>
          <Link href="/about">
            <a className="footer-link">Menu</a>
          </Link>
          <Link href="/about">
            <a className="footer-link">Catering</a>
          </Link>
          <Link href="/about">
            <a className="footer-link">Private Events</a>
          </Link>
          <Link href="/about">
            <a className="footer-link">About</a>
          </Link>
          <Link href="/about">
            <a className="footer-link">Contact</a>
          </Link>
        </nav>
        <div className="footer-socials">
          <Facebook />
          <Instagram />
        </div>
      </div>
      <div className="copyright">
        Copyright &#169; {year} Poco Piatti All Rights Reserved.
        Site by <a href="https://mattmaneval.com/">Matt Maneval</a>.
      </div>
    </FooterStyles>
  );
}

export default Footer;
