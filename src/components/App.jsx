import '../styles/App.scss';
import Header from './layout/Header';
import Hero from './layout/hero';
import Landing from './layout/Landing';
import Footer from './layout/Footer';


function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Landing />
      </main>
      <Footer />
    </>
  )
}

export default App;
