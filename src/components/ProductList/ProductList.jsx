import { useState, useEffect } from 'react'
import axios from 'axios'

export default function ProductList() {
  const [items, setItems] = useState([]);

    axios.defaults.baseURL =
      'http://176.37.226.184:8009';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/products')
        setItems(response.data.data)
        console.log(response.data)
      }
      catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [])
  
  return (
    <section>
      <p> Product List </p>
      <ul>
        {items.map(item =>
          <li key={item.id}>{item.title}</li>
        )}
      </ul>
    </section>
  );
}