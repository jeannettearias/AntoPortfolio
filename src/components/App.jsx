import '../styles/App.scss';
import Header from './layout/Header';
import Hero from './layout/Hero';
import Landing from './landing/Landing';
import Bar from './layout/Bar';
import heroData from '../data/heroData.json';
import React from 'react';
import { useState } from 'react';

function App() {
  const [data, setData] = useState(heroData);

  return (
    <section className="Home">
      <Header />

      <main className="body">

        <Hero heroData={data} />
        <Landing />
        <Bar />

      </main>


    </section>
  )
}

export default App;
