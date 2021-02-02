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
    font-size: 6em;
    color: ${color.background};
    margin-bottom: ${space.space};
    letter-spacing: 0.4rem;
    line-height: 110%;

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
    font-size: 1.65em;
    margin-bottom: ${space.space};
    text-transform: uppercase;
    text-shadow: 0.1rem 0.1rem ${color.backgroundAlt};

    @media ${media.secondary} {
      font-size: 2.25em;
    }
  }

  h3,
  h4 {
    color: ${color.foreground};
    margin-bottom: ${space.halfSpace};
    font-size: 1.5em;
    line-height: 1.4;
    font-family: ${fonts.subHeading};

    @media ${media.secondary} {
      font-size: 1.6em;
    }
  }

  h5 {
    font-family: ${fonts.heading};
    font-size: 1.1rem;
    letter-spacing: 0.3em;
    text-transform: uppercase;
  }

  p {
    font-family: ${fonts.font};
    color: ${color.foreground};
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
`;

export default GlobalStyle;