import React from 'react';
import styled from 'styled-components';
import media from '../styles/media';
import PrimaryCta from './navigation/PrimaryCta';
import SecondaryCta from './navigation/SecondaryCta';
import theme from '../styles/theme';
const { color, space } = theme;

const OrderModalStyle = styled.div`
  background-color: ${color.background};
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 4;
  display: ${({ modal }) => modal ? 'block' : 'none'};

  .order-modal-container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    ${'' /* background-color: ${color.backgroundTert}; */}
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: ${space.space};

    @media ${media.primary} {
      grid-template-columns: 1fr;
    }
  }


    color: ${color.foreground};

`;

const OrderModal = props => {

  return (
    <OrderModalStyle modal={props.modal}>
      <div className="order-modal-container">
        <button onClick={props.onClick}>Go Back</button>
        <div>
          <h5>Choose your location for online ordering.</h5>
          <h5>Or call <a href="tel:4199310281">419-931-0281</a> for any location.</h5>
        </div>
        <div>
          <SecondaryCta
            href="https://www.toasttab.com/poco-piatti-perrysburg-3155-chapel-drive/v3/?mode=fulfillment"
            text="Perrysburg"
          />
          <SecondaryCta
            href="https://www.toasttab.com/poco-piatti-toledo-6710-w-central-ave-1/v3/?mode=fulfillment"
            text="Sylvania"
          />
        </div>
      </div>
    </OrderModalStyle>
  );
}

export default OrderModal;
