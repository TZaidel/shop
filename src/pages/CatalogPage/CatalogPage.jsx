import { useParams } from 'react-router-dom';
import Header from '../../components/Header/Header.jsx';
import ProductList from '../../components/ProductList/ProductList.jsx';
import Footer from '../../components/Footer/Footer.jsx';

export default function CatalogPage() {
  const { gender } = useParams();

  return (
    <div>
      <Header />
      <ProductList gender={gender} />
      <Footer />
    </div>
  );
}
