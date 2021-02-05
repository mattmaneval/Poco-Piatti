import Header from '../components/Header';
import Footer from '../components/Footer';
import Slider from '../components/Slider';

const slideData = [
  {
    index: 0,
    headline: 'Catering',
    button: 'Shop now',
    src: '/assets/images/mushroomcaps.jpg',
    href: '/'
  },
  {
    index: 1,
    headline: 'Menu',
    button: 'Book travel',
    src: '/assets/images/fatoosh.jpg',
    href: '/menu'
  },
  {
    index: 2,
    headline: 'Private Events',
    button: 'Listen',
    src: '/assets/images/downtown_1.jpeg',
    href: '/private-events'
  },
  {
    index: 3,
    headline: 'About',
    button: 'Get Focused',
    src: '/assets/images/mushroomcaps.jpg',
    href: '/about'
  }
]

const About = () => {
  return (
    <div>
      <Header />
      <Slider slides={slideData}/>
      <Footer />
    </div>
  );
}

export default About;
