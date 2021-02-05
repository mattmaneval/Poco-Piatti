import { createGlobalStyle } from 'styled-components';
import Resets from './resets';
import Fonts from './fonts';
import mixins from './mixins';
import media from './media';
import theme from './theme';

const { space, color, fonts } = theme;

const GlobalStyle = createGlobalStyle`
  ${Resets};
  ${Fonts};
  ${mixins};
  ${media};

  html {
    box-sizing: border-box;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  html,
  body {
    background-color: ${color.background};
    overflow-x: hidden;
  }

  body {
    position: relative;
  }

  section {
    padding: 6em 0;
    display: inline-block;
    position: relative;
    clear: both;
    float: none;
    width: 100%;

    @media ${media.secondary} {
      padding: 3em 0;
    }
  }

  h1 {
    font-family: ${fonts.title};
    font-size: 7em;
    color: ${color.foreground};
    margin-bottom: ${space.space};
    line-height: 85%;

    @media ${media.primary} {
      font-size: 4em;
    }

    @media ${media.secondary} {
      font-size: 3em;
    }
  }

  h2 {
    display: inline-block;
    color: ${color.foreground};
    font-family: ${fonts.title};
    font-size: 3.65em;
    margin-bottom: 1.25rem;
    text-transform: uppercase;

    @media ${media.secondary} {
      font-size: 2.25em;
    }
  }

  h3,
  h4 {
    color: ${color.foreground};
    margin-bottom: ${space.halfSpace};
    font-size: 2.25em;
    font-family: ${fonts.subHeading};
  }

  h5 {
    display: inline-block;
    color: ${color.foreground};
    font-family: ${fonts.title};
    font-size: 1.65em;
    margin-bottom: ${space.space};
    text-transform: uppercase;

    @media ${media.secondary} {
      font-size: 2.25em;
    }
  }

  p {
    font-family: ${fonts.font};
    color: ${color.background};
    line-height: 140%;
    font-size: 1.25em;

    a {
      ${mixins.animate};
      color: ${color.foreground};
      text-decoration: none;
      cursor: pointer;

      &:hover {
        color: ${color.backgroundTert};
      }
    }
  }

  .wrap {
    ${mixins.wrap}
  }

:root {
  --color-primary: #6B7A8F;
  --color-secondary: #101118;
  --color-accent: #1D1F2F;
  --color-focus: #6D64F7;
  --base-duration: 600ms;
  --base-ease: cubic-bezier(0.25, 0.46, 0.45, 0.84);
}

// =========================
// Global
// =========================

// *, *:before, *:after {
//   box-sizing: border-box;
// }
//
// html, body {
//   height: 100%;
// }
//
// body {
//   font-family: 'IBM Plex Sans', sans-serif;
//   background-color: var(--color-secondary);
// }
//
// #app {
//   align-items: center;
//   display: flex;
//   height: 100%;
//   justify-content: center;
//   overflow-x: hidden;
//   width: 100%;
// }
//
// h1, h2, h3 {
//   font-family: 'Playfair Display', serif;
// }
//
// .visuallyhidden {
//   clip: rect(1px, 1px, 1px, 1px);
//   height: 1px;
//   overflow: hidden;
//   position: absolute !important;
//   white-space: nowrap;
//   width: 1px;
// }


// =========================
// Icons
// =========================

.icon {
  fill: var(--color-primary);
  width: 100%;
}


// =========================
// Buttons
// =========================

.btn {
  background-color: var(--color-primary);
  border: none;
  border-radius: 0.125rem;
  color: white;
  cursor: pointer;
  font-family: inherit;
  font-size: inherit;
  padding: 1rem 2.5rem 1.125rem;

  &:focus {
    outline-color: var(--color-focus);
    outline-offset: 2px;
    outline-style: solid;
    outline-width: 3px;
  }

  &:active {
    transform: translateY(1px);
  }
}


// =========================
// Slider controls
// =========================

.slider__controls {
  display: flex;
  justify-content: center;
  position: absolute;
  top: calc(100% + 1rem);
  width: 100%;

  .btn {
    --size: 3rem;

    align-items: center;
    background-color: transparent;
    border: 3px solid transparent;
    // border-radius: 100%;
    display: flex;
    height: var(--size);
    padding: 0;
    width: var(--size);

    &:focus {
      border-color: red;
      outline: none;
    }

    &--previous > * {
      transform: rotate(180deg);
    }
  }
}


// =========================
// Slider
// =========================

.slider {
  --slide-size: 70vmin;
  --slide-margin: 4vmin;

  height: var(--slide-size);
  margin: 0 auto;
  position: relative;
  width: var(--slide-size);
}

.slider__wrapper {
  display: flex;
  margin: 0 calc(var(--slide-margin) * -1);
  position: absolute;
  transition: transform var(--base-duration) cubic-bezier(0.25, 1, 0.35, 1);
}


// =========================
// Slide
// =========================

.slide {
  align-items: center;
  color: white;
  display: flex;
  flex: 1;
  flex-direction: column;
  height: var(--slide-size);
  justify-content: center;
  margin: 0 var(--slide-margin);
  opacity: 0.25;
  position: relative;
  text-align: center;
  transition:
    opacity calc(var(--base-duration) / 2) var(--base-ease),
    transform calc(var(--base-duration) / 2) var(--base-ease);
  width: var(--slide-size);
  z-index: 1;

  &--previous,
  &--next {
    &:hover {
      opacity: 0.5;
    }
  }

  &--previous {
    cursor: w-resize;

    &:hover {
      transform: translateX(2%);
    }
  }

  &--next {
    cursor: e-resize;

    &:hover {
      transform: translateX(-2%);
    }
  }
}

.slide--current {
  --x: 0;
  --y: 0;
  --d: 50;

  opacity: 1;
  pointer-events: auto;
  user-select: auto;

  @media (hover: hover) {
    &:hover .slide__image-wrapper {
      transform:
        scale(1.025)
        translate(
          calc(var(--x) / var(--d) * 1px),
          calc(var(--y) / var(--d) * 1px)
        );
    }
  }
}

.slide__image-wrapper {
  background-color: var(--color-accent);
  border-radius: 1%;
  height: 100%;
  left: 0%;
  overflow: hidden;
  position: absolute;
  top: 0%;
  transition: transform calc(var(--base-duration) / 4) var(--base-ease);
  width: 100%;
}

.slide__image {
  --d: 20;

  height: 110%;
  left: -5%;
  object-fit: cover;
  // opacity: 0;
  pointer-events: none;
  position: absolute;
  top: -5%;
  transition:
    opacity var(--base-duration) var(--base-ease),
    transform var(--base-duration) var(--base-ease);
  user-select: none;
  width: 110%;

  @media (hover: hover) {
    .slide--current & {
      transform:
        translate(
          calc(var(--x) / var(--d) * 1px),
          calc(var(--y) / var(--d) * 1px)
        );
    }
  }
}

.slide__headline {
  font-size: 15vmin;
  font-weight: 600;
  position: relative;
}

.slide__content {
  --d: 60;

  opacity: 0;
  padding: 4vmin;
  position: relative;
  transition: transform var(--base-duration) var(--base-ease);
  visibility: hidden;
  display: flex;
  flex-direction: column;

  .slide--current & {
    animation: fade-in calc(var(--base-duration) / 2) var(--base-ease) forwards;
    visibility: visible;

    @media (hover: hover) {
      transform:
        translate(
          calc(var(--x) / var(--d) * -1px),
          calc(var(--y) / var(--d) * -1px)
        );
    }
  }

  > * + * {
    margin-top: 2rem;
  }
}


// =========================
// Animations
// =========================

@keyframes fade-in {
  from { opacity: 0 }
  to   { opacity: 1 }
}

`;

export default GlobalStyle;
