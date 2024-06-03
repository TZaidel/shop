import Hero from '../../components/Hero/Hero';
import ProductList from '../../components/ProductList/ProductList';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';

export default function HomePage() {
  return (
    <div>
      <Header />
      <Hero />
      <ProductList />
      <Footer />
    </div>
  );
}
