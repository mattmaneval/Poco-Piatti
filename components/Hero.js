import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import PrimaryCta from './PrimaryCta';
import SecondaryCta from './SecondaryCta';
import CallCta from './CallCta';
import mixins from '../styles/mixins';
import media from '../styles/media';
import theme from '../styles/theme';
const { color, space } = theme;

const HeroStyles = styled.section`
  background-color: ${color.background};

  p {
    margin-bottom: 4rem;
    color: ${color.foregroundDim};
    font-size: 1.35em;

    &:first-of-type {
      margin-bottom: 1.25rem;
    }
  }

  h3 {
    color: ${color.background};
  }
`;

const Hero = () => {
  return (
    <HeroStyles>
      <div className="wrap">
        <div className="hero-heading">
          <p>Open for dine-in and carryout</p>
          <h1>Toledo's Mediterranean Tapas Bar</h1>
          <p>Call 419-931-0281 for carryout and reservations. Now offering delivery onorders of $15 and up.</p>
          <PrimaryCta
            href="/"
            text="Order Online"
          />
          <SecondaryCta
            href="/"
            text="See Menu"
          />
        </div>
      </div>
    </HeroStyles>
  );
}

export default Hero;
