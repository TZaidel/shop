import Header from '../../components/Header/Header';
import CartList from '../../components/CartList/CartList'
import RecList from '../../components/RecList/RecList'
import Footer from '../../components/Footer/Footer';

export default function CartPage() {
  return (
    <div>
      <Header />
      <CartList />
      <RecList/>
      <Footer />
    </div>
  );
}
