import { css } from 'styled-components';

const Fonts = css`
  @font-face {
      font-family: 'eb garamondregular';
      src: url('/assets/fonts/ebgaramond-variablefont-wght-webfont.woff2') format('woff2'),
        url('/assets/fonts/ebgaramond-variablefont-wght-webfont.woff') format('woff');
      font-weight: normal;
      font-style: normal;
  };

  @font-face {
      font-family: 'ostrich sansheavy';
      src: url('/assets/fonts/ostrichsans-heavy-webfont.woff2') format('woff2'),
        url('/assets/fonts/ostrichsans-heavy-webfont.woff') format('woff');
      font-weight: normal;
      font-style: normal;
  };
`;

export default Fonts;
