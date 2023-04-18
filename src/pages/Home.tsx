import React, { useEffect, useState } from 'react';
import { baseURL } from '../services/api';
import axios from 'axios';
import { Products } from '../types/products';
import Header from '../components/header/Header';

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

  return (
    <div>
      <Header />
    </div>
  );
};

export default Home;