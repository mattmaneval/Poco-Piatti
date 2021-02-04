import Head from 'next/head';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import { theme, GlobalStyle } from '../styles';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ThePocoExperience from '../components/ThePocoExperience';
import Map from '../components/Map';
import Locations from '../components/Locations';
import Footer from '../components/Footer';

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
      <ThePocoExperience />
      <Locations />
      <Map />
      <Footer />
    </div>
  )
}
