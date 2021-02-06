import React, { useState } from 'react';
import styled from 'styled-components';
import PrimaryCta from './navigation/PrimaryCta';
import SecondaryCta from './navigation/SecondaryCta';
import OrderModal from './OrderModal';
import media from '../styles/media';
import theme from '../styles/theme';

const { color } = theme;

const HeroStyles = styled.section`
  background-color: ${color.background};

  p {
    margin-bottom: 4rem;
    color: ${color.foregroundDim};
    font-size: 1.35em;

    &:first-of-type {
      font-size: 2.65em;
      margin-bottom: 1.25rem;

      @media ${media.primary} {
        font-size: 1.85rem;
      }
    }
  }

  h3 {
    color: ${color.background};
  }
`;

function Hero() {
  const [modal, openModal] = useState(false);

  const handleClick = () => (modal ? openModal(false) : openModal(true));

  return (
    <HeroStyles>
      <div className="wrap">
        <div className="hero-heading">
          <p>Welcome to Poco</p>
          <h1>
            Toledo&apos;s
            <br />
            Mediterranean
            <br />
            Tapas Bar
          </h1>
          <p>Call 419-931-0281 for carryout and reservations.</p>
          <PrimaryCta
            text="Order Online"
            onClick={handleClick}
          />
          <SecondaryCta
            href="/"
            text="See Menu"
          />
        </div>
      </div>
      <OrderModal modal={modal} onClick={handleClick} />
    </HeroStyles>
  );
}

export default Hero;
