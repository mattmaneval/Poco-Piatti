import styled from 'styled-components';
import FoodItem from './FoodItem';
import theme from '../../styles/theme';

const { space } = theme;

const SaladsStyle = styled.div`
  margin-bottom: ${space.space};
`;

const saladsData = [
  {
    name: 'Greek Salad',
    desc: 'Lettuce, tomato, cucumber, onion, peppers, olives, feta.',
    price: {
      small: 6,
      large: 11,
    },
  },
  {
    name: 'Fatoosh',
    desc: 'Tomato, cucumber, peppers, onion, pita chips, sumac, lemon and olive oil.',
    price: {
      small: 7,
      large: 12,
    },
  },
  {
    name: 'Mashgara Tabouli',
    desc: 'Parsley, tomato, cucumber, onion, mint, cracked wheat, lemon and olive oil.',
    price: {
      small: 6,
      large: 10,
    },
  },
  {
    name: 'Falafel Salad',
    desc: 'Falafel patties, tomato, cucumber, radish, pickle, onion, tahini sauce.',
    price: {
      small: 6,
      large: 11,
    },
  },
  {
    name: 'Artichoke Salad',
    desc: 'Artichoke hearts, hearts of palm, radish, grape tomato, spring mix, lemon feta vinaigrette.',
    price: {
      small: 7,
      large: 12,
    },
  },
  {
    name: 'Poco House Salad',
    desc: 'Spring mix, red onion, candied pecans, grape tomato, raspberry vinaigrette.',
    price: {
      small: 5,
      large: 9,
    },
  },
  {
    name: 'Roasted Beet Salad',
    desc: 'Spring mix, roasted beets, carrots, red pepper, red onion, goat cheese, candied pecans, balsamic dressing.',
    price: {
      small: 7,
      large: 12,
    },
  },
];

const Salads = () => (
  <SaladsStyle>
    <h4>Salads</h4>
    {Object.keys(saladsData).map((key) => (
      <FoodItem data={saladsData[key]} />
    ))}
  </SaladsStyle>
);

export default Salads;
