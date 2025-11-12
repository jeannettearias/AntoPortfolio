import '../styles/App.scss';
import Header from './layout/Header';
import Landing from './landing/Landing';


function App() {


  return (
    <>
      <section className="Home">
        <Header />

      </section>
      <section className="body">
        <Landing />

      </section>
    </>
  )
}

export default App;
