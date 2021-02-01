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
    max-width: 60em;
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

  flexBetween: css `
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,

  // Box Shadow
  boxShadow: css`
    box-shadow: 1em 1em 4em -2em ${color.foreground};
  `,

  // Animate
  animate: css`
    transition: 0.2s all ease-in;
  `,
};

export default mixins;
