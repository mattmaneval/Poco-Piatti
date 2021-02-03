import styled from 'styled-components';
import Link from 'next/link';
import media from '../styles/media';
import theme from '../styles/theme';
const { color, fonts } = theme;

const PrimaryCtaStyle = styled.a`
  display: inline-block;
  padding: 1.15rem 3.65rem;
  background: ${color.foreground};
  border-radius: 2em 2em 0 2em;
  color: ${color.background};
  font-family: ${fonts.heading};
  letter-spacing: 0.1em;
  font-size: 1.35rem;

  @media ${media.secondary} {
    padding: 1.15rem 1.65rem;
  }
`;

const PrimaryCta = props => {
  return (
    <Link href={props.href} passHref>
      <PrimaryCtaStyle>{props.text}</PrimaryCtaStyle>
    </Link>
  );
}

export default PrimaryCta;
