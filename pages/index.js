import Head from 'next/head';
import { GlobalStyle } from '../styles';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ThePocoExperience from '../components/ThePocoExperience';
import Map from '../components/Map';
import Locations from '../components/Locations';
import Slider from '../components/Slider';
import Footer from '../components/Footer';

const slideData = [
  {
    index: 0,
    headline: 'Catering',
    button: 'Shop now',
    src: '/assets/images/mushroomcaps.jpg',
    href: '/',
  },
  {
    index: 1,
    headline: 'Menu',
    button: 'Book travel',
    src: '/assets/images/fatoosh.jpg',
    href: '/menu',
  },
  {
    index: 2,
    headline: 'Private Events',
    button: 'Listen',
    src: '/assets/images/downtown_1.jpeg',
    href: '/private-events',
  },
  {
    index: 3,
    headline: 'About',
    button: 'Get Focused',
    src: '/assets/images/mushroomcaps.jpg',
    href: '/about',
  },
];

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GlobalStyle />
      <Header />
      <Hero />
      <Slider slides={slideData} />
      <ThePocoExperience />
      <Locations />
      <Map />
      <Footer />
    </div>
  );
}
