import Head from 'next/head';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import { theme, GlobalStyle } from '../styles';
import Header from '../components/Header';
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
      <Footer />
    </div>
  )
}
