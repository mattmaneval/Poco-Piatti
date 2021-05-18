import styled from 'styled-components';
import PropTypes from 'prop-types';
import theme from '../../styles/theme';
import mixins from '../../styles/mixins';
import GlutenFree from '../icons/Gluten-Free';

const { fonts, space, color } = theme;

const FoodItemStyles = styled.div`
  font-family: ${fonts.font};
  margin-bottom: 4rem;

  .food-item-name {
    ${mixins.flexBetween};
    margin-bottom: ${space.quarterSpace};
    color: ${color.foreground};
    font-weight: bold;
    font-size: 1.85em;

    /* div:last-of-type {
      font-size: 1.5rem;
    } */
  }

  .food-item-desc {
    color: ${color.foregroundDim};
    font-size: 1.25em;
    margin-bottom: ${space.halfSpace};
  }

  .food-item-options {
    display: flex;
    align-items: center;
    color: ${color.foreground};
    text-transform: uppercase;
    font-family: ${fonts.fontBold};
    letter-spacing: 0.25em;
    font-size: 0.8em;

    svg {
      width: 1.5em;
      height: 1.5em;
      fill: rgb(0, 160, 72);;
      margin-right: 0.85em;
    }
  }
`;

const FoodItem = ({ data }) => (
  <FoodItemStyles>
    <div className="food-item-name">
      <div>
        {data.name}
      </div>
      <div>
        {data.price
          ? `${typeof data.price === 'object'
            ? `Sm ${data.price.small} Lg ${data.price.large}`
            : `${data.price}`}`
          : ''}
      </div>
    </div>
    <div className="food-item-desc">{data.desc ? data.desc : null }</div>
    {data.dietary
      ? (
        <div className="food-item-options">
          <GlutenFree />
          {data.dietary
            ? `${data.dietary.title}`
            : null }
        </div>
      )
      : null }

    {data.dietary && data.dietary.subtitle
      ? (
        <div className="food-item-desc">
          {data.dietary.subtitle}
        </div>
      )
      : null }
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
    dietary: {
      type: PropTypes.string,
      title: PropTypes.string,
    },
  }).isRequired,
};

export default FoodItem;
