import '../styles/App.scss';
import Header from './layout/Header';
import Hero from './layout/hero';
import Landing from './landing/Landing';
import Footer from './layout/Footer';
import heroData from '../data/heroData.json';
import React from 'react';
import { useState } from 'react';

function App() {
  const [data, setData] = useState(heroData);

  return (

    <main className="main">
      <Header />

      <Hero heroData={data} />
      <Landing />

      <Footer />
    </main>

  )
}

export default App;
