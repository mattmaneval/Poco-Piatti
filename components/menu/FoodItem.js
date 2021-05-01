import styled from 'styled-components';
import PropTypes from 'prop-types';
import theme from '../../styles/theme';

const { fonts, space, color } = theme;

const FoodItemStyles = styled.div`
  font-family: ${fonts.font};
  margin-bottom: 6rem;

  .food-item-name {
    margin-bottom: ${space.quarterSpace};
    color: ${color.foreground};
    font-weight: bold;
    font-size: 2.25em;
  }

  .food-item-desc {
    color: ${color.foregroundDim};
    font-size: 1.25em;
    margin-bottom: ${space.halfSpace};
  }

  .food-item-options {
    color: ${color.foreground};
    text-transform: uppercase;
    font-family: ${fonts.fontBold};
    letter-spacing: 0.3em;
    font-size: 0.8em;
  }
`;

const FoodItem = ({ data }) => (
  <FoodItemStyles>
    <div className="food-item-name">
      {data.price
        ? `${data.name} –
        ${typeof data.price === 'object'
          ? `Sm ${data.price.small} Lg ${data.price.large}`
          : `${data.price}`}`
        : data.name}
    </div>
    <div className="food-item-desc">{data.desc ? data.desc : null }</div>
    <div className="food-item-options">GLUTEN FREE OPTION</div>
  </FoodItemStyles>
);

FoodItem.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    desc: PropTypes.string,
    price: {
      small: PropTypes.number,
      large: PropTypes.number,
    },
  }).isRequired,
};

export default FoodItem;
