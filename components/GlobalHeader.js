import styled from 'styled-components';
import Link from 'next/link';
import mixins from '../styles/mixins';
import media from '../styles/media';
import theme from '../styles/theme';

const { color, fonts, space } = theme;

const GlobalHeaderStyles = styled.div`

  .global-header {
    display: flex;
    justify-content: flex-end;
    position: relative;

    @media ${media.primary} {
      display: none;
    }

    a {
      ${mixins.animate};
      font-family: ${fonts.fontheading};
      color: ${color.foregroundDim};
      padding: ${space.halfSpace};
      font-size: 0.85rem;
      letter-spacing: 0.05rem;

      &:hover {
        color: ${color.backgroundTert};
      }
    }
  }
`;

const GlobalHeader = () => (
  <GlobalHeaderStyles>
    <div className="global-header">
      <Link href="/">
        <a>Contact</a>
      </Link>
      <Link href="/menu">
        <a>Locations</a>
      </Link>
      <Link href="/catering">
        <a>Order</a>
      </Link>
    </div>
  </GlobalHeaderStyles>
);

export default GlobalHeader;
