import styled from 'styled-components';
import Link from 'next/link';
import theme from '../../styles/theme';
import media from '../../styles/media';
const { color, fonts } = theme;

const SecondaryCtaStyle = styled.button`
  display: inline-block;
  background: none;
  font-family: ${fonts.heading};
  letter-spacing: 0.1em;
  font-size: 1.35rem;
  color: ${color.foreground};
  padding: 1.15rem 3.65rem;
  position: relative;

  @media ${media.secondary} {
    padding: 1.15rem 1.65rem;
  }

  &:before {
    content: "";
    position: absolute;
    width: 3.7em;
    height: 0.15rem;
    bottom: 0.7em;
    display: inline-block;
    background-color: ${color.foreground};
  }
`;

const SecondaryCta = props => {
  return (
    <Link href={props.href} passHref>
      <SecondaryCtaStyle>{props.text}</SecondaryCtaStyle>
    </Link>
  );
}

export default SecondaryCta;
