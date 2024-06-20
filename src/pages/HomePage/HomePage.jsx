import Header from '../../components/Header/Header.jsx';
import Hero from '../../components/Hero/Hero.jsx';
import Footer from '../../components/Footer/Footer.jsx';

import baseStyle from '../Base.module.css';

export default function HomePage() {
  return (
    <div className={baseStyle.container}>
      <Header/>
      <Hero />
      <Footer/>
    </div>
  );
}