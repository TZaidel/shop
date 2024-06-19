import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import ProductList from '../../components/ProductList/ProductList';
import Footer from '../../components/Footer/Footer';

export default function HomePage() {
  return (
    <div>
      <Header />
      <h1>Home Page</h1>
      <Hero />
      <ProductList />
      <Footer />
    </div>
  );
}
