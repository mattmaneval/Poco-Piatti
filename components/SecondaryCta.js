import styled from 'styled-components';
import Link from 'next/link';
import theme from '../styles/theme';
const { color, fonts } = theme;

const SecondaryCtaStyle = styled.a`
  font-family: ${fonts.heading};
  letter-spacing: 0.1em;
  font-size: 1.35rem;
  color: ${color.foreground};
  padding: 1.15rem 3.65rem;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    width: 3.7em;
    height: 0.25em;
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
