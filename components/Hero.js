import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import PrimaryCta from './PrimaryCta';
import SecondaryCta from './SecondaryCta';
import mixins from '../styles/mixins';
import media from '../styles/media';
import theme from '../styles/theme';
const { color, space } = theme;

const HeroStyles = styled.section`
  background-color: ${color.background};

  .wrap {
    ${mixins.wrap};
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    ${'' /* align-items: center; */}
    grid-gap: ${space.space};

    @media ${media.primary} {
      display: block;
    }
  }

  h5 {
    margin-bottom: ${space.halfSpace};
  }

  h1 {
    max-width: 7em;
    color: white
  }

  p {
    margin-bottom: 4rem;
    color: ${color.foregroundDim};
    font-size: 1.35em;

    &:first-of-type {
      margin-bottom: 1.25rem;
    }
  }

  .hero-ctas {
    margin-bottom: 4em;

    a {
      @media ${media.secondary} {
        padding: 1.15rem 1.65rem;
      }
    }
  }

  h3 {
    color: ${color.background};
  }

  .hero-image {
    position: relative;
    img {
      border-radius: 3em 3em 3em 0;

    }
  }

  .image-tag-hummus {
    position: absolute;
    top: 1em;
    background-color: wheat;
    padding: 2em;
    border-radius: 3em 3em 0 3em;
    font-family: 'ostrich sansheavy';
    letter-spacing: 0.1em;
    left: -3.5em;

    p {
      color: ${color.background};
      font-size: 0.85em;
      margin-bottom: 0;
      max-width: 11em;
    }
  }

  .image-tag-salad {
    position: absolute;
    top: 23em;
    background-color: wheat;
    padding: 2em;
    border-radius: 3em 3em 3em 0;
    font-family: 'ostrich sansheavy';
    letter-spacing: 0.1em;
    left: 36.5em;
    text-align: left;
    min-width: 14em;

    p {
      color: ${color.background};
      font-size: 0.85em;
      margin-bottom: 0;
      max-width: 11em;
    }
  }

  .image-tag-arayes {
    position: absolute;
    top: 34em;
    background-color: wheat;
    padding: 2em;
    border-radius: 3em 3em 0 3em;
    font-family: 'ostrich sansheavy';
    letter-spacing: 0.1em;
    left: -3.5em;

    p {
      color: ${color.background};
      font-size: 0.85em;
      margin-bottom: 0;
      max-width: 11em;
    }
  }

  .image-tag {







  }
`;

const Hero = () => {
  return (
    <HeroStyles>
      <div className="wrap">
        <div className="hero-heading">
          <p>Open for dine-in and carryout</p>
          <h1>Toledo's Mediterranean Tapas Bar</h1>
          <p>Call 419-931-0281 for carryout and reservations. Now offering delivery on
            orders of $15 and up.</p>
          <div className="hero-ctas">
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
        <div className="hero-image">
          <Image
            src="/assets/images/small-plates.jpeg"
            alt=""
            height={2048}
            width={1638}
            layout="intrinsic"
          />
          <div className="image-tag-hummus">
            Riad's Hummus b Tahini
            <p>Served with pita.</p>
          </div>
          <div className="image-tag-salad">
            Roasted Beet Salad
            <p>Spring mix, red onion, candied pecans, grape tomato, raspberry vinaigrette.</p>
          </div>
          <div className="image-tag-arayes">
            Arayes halabi
            <p>Lamb, parsley and onion baked in pita. Served with Hummus.</p>
          </div>
        </div>
      </div>
    </HeroStyles>
  );
}

export default Hero;
