import '../styles/App.scss';
import Header from './layout/Header';
import Hero from './layout/hero';
import Landing from './landing/Landing';
import Footer from './layout/Footer';

function App() {
  return (
    <main className='main'>
      <Header />

      <body className="body">
        <Hero />
        <Landing />
      </body>

      <Footer />
    </main>
  )
}

export default App;
