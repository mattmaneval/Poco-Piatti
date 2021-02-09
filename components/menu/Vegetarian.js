import styled from 'styled-components';
import FoodItem from './FoodItem';
import theme from '../../styles/theme';

const { space } = theme;

const VegetarianStyle = styled.div`
  margin-bottom: ${space.space};
`;

const vegetarianData = [
  {
    name: 'Riad\'s Hummuos B Tahini',
    desc: 'Served with Pita.',
    price: {
      small: 5,
      large: 8,
    },
  },
  {
    name: 'Roasted Garlic Feta Dip',
    desc: 'Served warm with diced tomato.',
    price: {
      small: 6,
      large: 9,
    },
  },
  {
    name: 'Lebanee',
    desc: 'Yogurt with cucumber, mint and drizzled with olive oil.',
    price: {
      small: 5,
      large: 8,
    },
  },
  {
    name: 'Saganaki Kasseri',
    desc: 'Greek kasseri cheese flamed tableside.',
    price: 6,
  },
  {
    name: 'Sauteed Mushrooms ',
    price: 9,
  },
  {
    name: 'Mujadra',
    desc: 'Green lentils and rice with caramelized onions and pickles.',
    price: {
      small: 6,
      large: 9,
    },
  },
  {
    name: 'Lubia Bi Zeit',
    desc: 'Sauteed green beans with garlic and onions in a tomato sauce.',
    price: 8,
  },
  {
    name: 'Veggie Grape Leaves',
    desc: 'Stuffed with chick peas, tomatoes, rice, onion and lemon.',
    price: {
      small: 5,
      large: 9,
    },
  },
  {
    name: 'Poco Brussel Sprouts',
    desc: 'Covered in fig jam, mint yogurt, grapes and toasted pecans.',
    price: {
      small: 6,
      large: 10,
    },
  },
  {
    name: 'Roasted Cauliflower',
    desc: 'Tossed in garlic oil, tahini and fresh dill.',
    price: {
      small: 5,
      large: 9,
    },
  },
  {
    name: 'Stuffed Portabella Caps',
    desc: 'Mushroom stuffed with a broccoli pesto and topped with pepperjack cheese and tomato.',
    price: {
      small: 7,
      large: 12,
    },
  },
];

const Vegetarian = () => (
  <VegetarianStyle>
    <h4>Vegetarian</h4>
    {Object.keys(vegetarianData).map((key) => (
      <FoodItem data={vegetarianData[key]} />
    ))}
  </VegetarianStyle>
);

export default Vegetarian;
