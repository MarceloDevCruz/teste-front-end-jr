import React, { useEffect, useState } from 'react';
import { baseURL } from '../services/api';
import axios from 'axios';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Categories from '../components/Categories';
import ProductsRelation from '../components/ProductsRelation';
import ProductsList from '../components/ProductsList';
import Partners from '../components/Partners';
import Brands from '../components/Brands';
import Products from '../components/Products';
import { ProductsType } from '../types/products';
import PartnersProducts from '../components/PartnersProducts';

const Home = () => {
  const [data, setData] = useState<ProductsType[] | null>(null);

  useEffect(() => {
    axios
      .get(baseURL)
      .then((res) => {
        setData(res.data.products);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Header />
      <main>
        <Categories />
        <ProductsRelation />
        <ProductsList />
        {data && <Products data={data} />}
        <Partners />
        <ProductsRelation />
        <p className="home__see-all">Ver Todos</p>
        {data && <Products data={data} />}
        <PartnersProducts />
        <Brands />
        <ProductsRelation />
        <p className="home__see-all">Ver Todos</p>
        {data && <Products data={data} />}
      </main>
      <Footer />
    </>
  );
};

export default Home;
