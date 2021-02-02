import React, { useState } from 'react';
import styled from 'styled-components';
import theme from '../styles/theme';
import mixins from '../styles/mixins';
const { color } = theme;

const ButtonContainer = styled.div`
  .active {
    span {
      &:before,
      &:after {
        top: 0;
        left: 0;
      }

      &:before {
        transform: rotate(45deg);
      }

      &:after {
        transform: rotate(-45deg);
      }
    }
  }
`;

const ButtonStyle = styled.button.attrs(props => ({
  className: props.className,
}))`
  -webkit-tap-highlight-color: transparent;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 1.5em;
  cursor: pointer;
  position: relative;
  box-sizing: content-box;
  background: none;
  z-index: 3;
  height: 0.8rem;
  width: 2rem;

  span {
    display: inline-block;
    background-color: ${color.background};
    border-radius: 5em;
    position: relative;

    &:before,
    &:after {
      ${mixins.animate};
      content: "";
      position: absolute;
      background-color: ${color.background};
      height: 0.1rem;
      width: 3rem;
      border-radius: 5em;
    }

    &:before {
      top: -6px;
      left: 0;
    }

    &:after {
      top: 6px;
      left: 0;
    }
  }
`;

const MenuButton = () => {

  const [menu, active] = useState(false);

  return (
    <ButtonContainer>
      <ButtonStyle
        className={!menu ? null : 'active'}
        onClick={() => menu ? active(false) : active(true)}
      >
        <span></span>
      </ButtonStyle>
    </ButtonContainer>
  );
}

export default MenuButton;
