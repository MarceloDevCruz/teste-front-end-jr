import React, { useEffect, useState } from 'react';
import { baseURL } from '../services/api';
import axios from 'axios';
import { Products } from '../types/products';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Categories from '../components/Categories';
import ProductsRelation from '../components/ProductsRelation';
import ProductsList from '../components/ProductsList';
import Partners from '../components/Partners';
import Brands from '../components/Brands';
import Product from '../components/Product';

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

  return (
    <>
      <Header />
      <main>
        <Categories />
        <ProductsRelation />
        <ProductsList />
        <Partners />
        <ProductsRelation />
        <p className="home__see-all">Ver Todos</p>

        <Product />

        <section className="partners">
          <div className="partners__container ul-height-products-284px">
            <h3 className="partners__container-title">Produtos</h3>
            <div className="partners__container-text-container">
              <p className="partners__container-text-container-paragraph">
                Lorem ipsum dolor sit amet, consectetur
              </p>
              <button className="btn__partners">Confira</button>
            </div>
          </div>
          <div className="partners__container ul-height-products-284px">
            <h3 className="partners__container-title">Produtos</h3>
            <div className="partners__container-text-container">
              <p className="partners__container-text-container-paragraph">
                Lorem ipsum dolor sit amet, consectetur
              </p>
              <button className="btn__partners">Confira</button>
            </div>
          </div>
        </section>

        <Brands />

        <ProductsRelation />
        <p className="home__see-all">Ver Todos</p>
      </main>
      <Footer />
    </>
  );
};

export default Home;
