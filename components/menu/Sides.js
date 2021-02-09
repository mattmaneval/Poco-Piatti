import styled from 'styled-components';
import FoodItem from './FoodItem';
import theme from '../../styles/theme';

const { space } = theme;

const SidesStyle = styled.div`
  margin-bottom: ${space.space};
`;

const sidesData = [
  {
    name: 'Hand-Cut French Fries',
    price: {
      small: 2,
      large: 4,
    },
  },
  {
    name: 'Rice Pilaf',
    price: {
      small: 2,
      large: 4,
    },
  },
  {
    name: 'Greek Potatoes',
    price: {
      small: 3,
      large: 6,
    },
  },
];

const Sides = () => (
  <SidesStyle>
    <h4>Sides</h4>
    {Object.keys(sidesData).map((key) => (
      <FoodItem data={sidesData[key]} />
    ))}
  </SidesStyle>
);

export default Sides;
