import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchProducts } from '../../redux/products/operations.js';
import ProductItem from '../ProductItem/ProductItem';

import styles from './ProductList.module.css';

export default function ProductList() {
  const { items } = useSelector(state => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  console.log(items);

  return (
    <section>
      <ul className={styles.list}>
        {items.map(item => (
          <ProductItem key={item.id} item={item} />
        ))}
      </ul>
    </section>
  );
}

// const [items, setItems] = useState([]);

//   axios.defaults.baseURL =
//     'http://176.37.226.184:8009';

// useEffect(() => {
//   const fetchData = async () => {
//     try {
//       const response = await axios.get('/api/products')
//       setItems(response.data.data)
//       console.log(response.data)
//     }
//     catch (error) {
//       console.log(error)
//     }
//   }
//   fetchData()
// }, [])
