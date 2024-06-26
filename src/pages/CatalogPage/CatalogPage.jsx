import Header from '../../components/Header/Header.jsx';
import ProductList from '../../components/ProductList/ProductList.jsx';
import Footer from '../../components/Footer/Footer.jsx';

import baseStyle from '../Base.module.css';

export default function CatalogPage() {
  return (
    <div className={baseStyle.container}>
      <Header />
      <ProductList/>
      <Footer />
    </div>
  );
}
