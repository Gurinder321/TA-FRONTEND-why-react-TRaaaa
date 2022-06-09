import Header from './Header';
import Hero from './Hero';
import Article from './Article';
import Footer from './Footer';

function App() {
  return (
    <>
      <Header />
      <main className="wrapper">
        <Hero />
        <Article />
      </main>
      <Footer />
    </>
  );
}

export default App;
