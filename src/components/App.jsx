import '../styles/App.scss';
import Header from './layout/Header';
import Hero from './layout/hero';
import Landing from './landing/Landing';
import Footer from './layout/Footer';

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Hero />
        <Landing />
      </main>
      <Footer />
    </>
  )
}

export default App;
