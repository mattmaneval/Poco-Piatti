import styled from 'styled-components';
import PropTypes from 'prop-types';
import theme from '../../styles/theme';

const { fonts, space } = theme;

const FoodItemStyles = styled.div`
  font-family: ${fonts.font};
  margin-bottom: ${space.space};

  .food-item-name {
    margin-bottom: ${space.quarterSpace};
    font-weight: bold;
    font-size: 1.25em;
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
