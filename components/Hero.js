import React, { useState } from 'react';
import styled from 'styled-components';
import PrimaryCta from './navigation/PrimaryCta';
import SecondaryCta from './navigation/SecondaryCta';
import OrderModal from './OrderModal';
import media from '../styles/media';
import theme from '../styles/theme';

const { color } = theme;

const HeroStyles = styled.section`
  /* background-color: ${color.foreground}; */
  background-image: url('/assets/images/small-plates.jpeg');
  background-size: cover;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .hero-heading {
    position: relative;
  }

  p {
    margin-bottom: 4rem;
    color: ${color.background};
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
            href="/menu"
            text="See Menu"
          />
        </div>
      </div>
      <OrderModal modal={modal} onClick={handleClick} />
    </HeroStyles>
  );
}

export default Hero;

// <iframe src="https://player.vimeo.com/video/325445778" width="640" height="564" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
// <video playsInline autoPlay muted loop id="bgvid">
//   <source src="https://pocopiatti.s3.us-east-2.amazonaws.com/background-video.mp4" type="video/mp4" />
//   <source src="https://pocopiatti.s3.us-east-2.amazonaws.com/background-video.mp4" type="video/mmp4" />
// </video>
