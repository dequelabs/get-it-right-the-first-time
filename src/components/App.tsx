import Header from './Header';
import Hero from './Hero';
import Order from './Order';
import Menu from './Menu';
import Faq from './Faq';

const App = () => {
  return (
    <main>
      <Header />
      <section class="content">
        <Hero />
        <Order />
        <Faq />
      </section>
    </main>
  );
};

export default App;
