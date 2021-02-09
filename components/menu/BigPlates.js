import styled from 'styled-components';
import FoodItem from './FoodItem';
import theme from '../../styles/theme';

const { space } = theme;

const BigPlatesStyles = styled.div`
  margin-bottom: ${space.space};
`;

const bigPlatesData = [
  {
    name: 'Poco Piatti Kabobs',
    desc: '2 for 15, 3 for 21, 4 for 27',
  },
  {
    name: 'Beef Tenderloin Shish Kabobs',
    desc: 'Beef tenderloin filet butchered in house and skewered with peppers, mushrooms, tomato and onion.',
  },
  {
    name: 'Shish Tawook',
    desc: 'Chicken breast marinated and skewered with peppers and onions.',
  },
  {
    name: 'Shish Kafta',
    desc: 'Ground lamb and beef mixed with chopped parsley and onion. Charbroiled.',
  },
  {
    name: 'Vegetable Kabob',
    desc: 'Seasonal Vegetables',
  },
  {
    name: 'Grilled Baby Lamb Chops',
    desc: 'New Zealand rack marinated and charbroiled. Served over rice pilaf.',
    price: 26,
  },
  {
    name: 'Poco Piatti Filet',
    desc: 'Charbroiled filet served with rice over a bed of peppers, onions and mushrooms.',
    price: 26,
  },
  {
    name: 'Lamb Shank Ossu Buco',
    desc: 'Poco specialty served over rice pilaf with carrots, celery and tomato sauce.',
    price: 25,
  },
  {
    name: 'Mousakka',
    desc: 'Layered eggplant, beef, bechamel, provolone and three cheese blend.',
    price: 14,
  },
  {
    name: 'Beef Marsala',
    desc: 'Tender beef tips, bell peppers, onions and mushrooms served over rice pilaf.',
    price: 16,
  },
];

const BigPlates = () => (
  <BigPlatesStyles>
    <h4>Big Plates</h4>
    {Object.keys(bigPlatesData).map((key) => (
      <FoodItem data={bigPlatesData[key]} />
    ))}
  </BigPlatesStyles>
);

export default BigPlates;
