import React, { useState } from 'react';
import styled from 'styled-components';
import PrimaryCta from './navigation/PrimaryCta';
import SecondaryCta from './navigation/SecondaryCta';
import OrderModal from './OrderModal';
import media from '../styles/media';
import mixins from '../styles/mixins';
import theme from '../styles/theme';

const { color, space } = theme;

const HeroStyles = styled.section`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  .header-ctas {
    margin-bottom: ${space.space};
  }
`;

const HeroImage = styled.div`
  position: relative;
  display: inline-block;
  background-image: url('/assets/images/small-plates.jpeg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 0;
  width: 64em;
  padding-top: 75%;

  @media ${media.primary} {
    width: 100%;
    padding-top: 100%;
  }
`;

function Hero() {
  const [modal, openModal] = useState(false);

  const handleClick = () => (modal ? openModal(false) : openModal(true));

  return (
    <HeroStyles>
      <div className="header-ctas">
        <PrimaryCta
          text="Order Now"
          onClick={handleClick}
        />
        <SecondaryCta
          href="/menu"
          text="See Menu"
        />
      </div>
      <HeroImage />
      <OrderModal modal={modal} onClick={handleClick} />
    </HeroStyles>
      // <div className="wrap">
      //   <div className="hero-heading">
      //     <h1>
      //       Toledo&apos;s
      //       <br />
      //       Mediterranean
      //       <br />
      //       Tapas Bar
      //     </h1>
      //     <p>Call 419-931-0281 for carryout and reservations.</p>
      //     <PrimaryCta
      //       text="Order Online"
      //       onClick={handleClick}
      //     />
      //     <SecondaryCta
      //       href="/menu"
      //       text="See Menu"
      //     />
      //   </div>
      // </div>
      // <OrderModal modal={modal} onClick={handleClick} />
    // </HeroStyles>
  );
}

export default Hero;

// <iframe src="https://player.vimeo.com/video/325445778" width="640" height="564" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
// <video playsInline autoPlay muted loop id="bgvid">
//   <source src="https://pocopiatti.s3.us-east-2.amazonaws.com/background-video.mp4" type="video/mp4" />
//   <source src="https://pocopiatti.s3.us-east-2.amazonaws.com/background-video.mp4" type="video/mmp4" />
// </video>
