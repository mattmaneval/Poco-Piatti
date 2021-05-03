import styled from 'styled-components';
import FoodItem from './FoodItem';
import theme from '../../styles/theme';

const { space } = theme;

const SeafoodStyle = styled.div`
  margin-bottom: ${space.space};
`;

const seafoodData = [
  {
    name: 'Shrimp Saganaki',
    desc: 'Sauteed with tomatoes, garlic, white wine, fresh oregano and feta.',
    price: {
      small: 7,
      large: 13,
    },
  },
  {
    name: 'Fried Calamari Zaatar',
    desc: 'Zaatar encrusted and served with spicy marinara.',
    price: {
      small: 7,
      large: 13,
    },
  },
  {
    name: 'Shrimp Asti-Spumante',
    desc: 'Sauteed with garlic, asti-spumante and parsley.',
    price: {
      small: 7,
      large: 13,
    },
    dietary: {
      type: 'gluten-free',
      title: 'Gluten Free',
    },
  },
  {
    name: 'Thai Shrimp \'Lasagna\'',
    desc: 'Layered with crispy wontons, spicy thai and coconut basil.',
    price: {
      small: 7,
      large: 13,
    },
  },
  {
    name: 'Blue Crab Lump Crab Cakes',
    desc: 'Served with roasted red pepper cream sauce.',
    price: {
      small: 9,
      large: 17,
    },
  },
  {
    name: 'Sumac Encrusted Tuna',
    desc: 'Served with tahini and diced cucumber salad.',
    price: {
      small: 10,
      large: 18,
    },
    dietary: {
      type: 'gluten-free',
      title: 'Gluten Free',
    },
  },
];

const Seafood = () => (
  <SeafoodStyle>
    <h4>Seafood</h4>
    {Object.keys(seafoodData).map((key) => (
      <FoodItem data={seafoodData[key]} />
    ))}
  </SeafoodStyle>
);

export default Seafood;
