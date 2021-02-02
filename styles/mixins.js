import { css } from 'styled-components';
import media from './media'
import theme from './theme';
const { color, responsive } = theme;

const mixins = {

  // Wrap
  wrap: css`
    display: block;
    position: relative;
    margin-left: auto;
    margin-right: auto;
    max-width: 80rem;
    width: ${responsive.wrap};

    @media ${media.secondary} {
      width: ${responsive.wrapMobile};
    }
  `,

  // Flex
  flexCenter: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,

  flexBetween: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,

  // Section
  section: css`
    padding: 6em 0;
    display: inline-block;
    position: relative;
    clear: both;
    float: none;
    width: 100%;

    @media ${media.secondary} {
      padding: 3em 0;
    }
  `,

  // Box Shadow
  boxShadow: css`
    box-shadow: 1em 1em 4em -2em ${color.foreground};
  `,

  // Animate
  animate: css`
    transition: 0.2s all ease-in-out;
  `,
};

export default mixins;
