import React, { useEffect, useState } from 'react';
import { baseURL } from '../services/api';
import axios from 'axios';
import { Products } from '../types/products';

const Home = () => {
  const [data, setData] = useState<Products[] | null>(null);

  useEffect(() => {
    axios
      .get(baseURL)
      .then((res) => {
        setData(res.data.products);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(data);

  return <div>home test</div>;
};

export default Home;
