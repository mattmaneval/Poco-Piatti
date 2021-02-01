import { css } from 'styled-components';
import EbGaramondRegularWoff from '../public/fonts/ebgaramond-variablefont_wght-webfont.woff';
import EbGaramondRegularWoff2 from '../public/fonts/ebgaramond-variablefont_wght-webfont.woff2';
import OstrichsansHeavyWoff from '../public/ostrichsans-heavy-webfont.woff';
import OstrichsansHeavyWoff2 from '../public/ostrichsans-heavy-webfont.woff2';

const Fonts = css`
  @font-face {
      font-family: 'Eb Garamond';
      src: url(${EbGaramondRegularWoff2}) format('woff2'), url(${OstrichsansHeavyWoff}) format('woff');
  };

  @font-face {
      font-family: 'Ostich Sans Heavy';
      src: url(${OstrichsansHeavyWoff2}) format('woff2'), url(${OstrichsansHeavyWoff}) format('woff');
  };
`;

export default Fonts;
