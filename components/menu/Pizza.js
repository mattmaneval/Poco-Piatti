import styled from 'styled-components';
import FoodItem from './FoodItem';
import theme from '../../styles/theme';

const { space } = theme;

const PizzaStyles = styled.div`
  margin-bottom: ${space.space};
`;

const pizzaData = [
  {
    name: 'Caprese',
    desc: 'Fresh Mozzarella. Tomato. Fresh Basil. Olive Oil.',
    price: 12,
  },
  {
    name: 'Chorizo and Pepperoncini ',
    desc: 'Roasted tomato sauce, chorizo sausage, hot peppers, onions and three cheese blend.',
    price: 12,
  },
  {
    name: 'Mediterranean Shrimp',
    desc: 'Feta cream, sauteed shrimp, tomato, feta.',
    price: 12,
  },
  {
    name: 'The Poco Piatti ',
    desc: 'Garlic sauce, tomato, roasted peppers, onion, kalamata olives, feta.',
    price: 12,
  },
  {
    name: 'Italian Sausage and Ricotta',
    desc: 'Spicy Italian Sausage with ricotta, roasted red peppers, topped with fresh basil..',
    price: 12,
  },
  {
    name: 'Spinach Artichoke',
    desc: 'Homemade alfredo sauce, artichoke, spinach, tomato, three cheese blend.',
    price: 12,
  },
  {
    name: 'Portabella and Artichoke',
    desc: 'Goat cheese pesto, portabella mushroom, artichoke, caramelized onion, three cheese blend.',
    price: 12,
  },
];

const Pizza = () => (
  <PizzaStyles>
    <h4>Pizza</h4>
    {Object.keys(pizzaData).map((key) => (
      <FoodItem data={pizzaData[key]} />
    ))}
  </PizzaStyles>
);

export default Pizza;
