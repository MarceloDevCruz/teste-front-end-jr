import React from 'react';
import { ProductsType } from '../types/products';
import Product from './Product';

const Products = ({ data }: any) => {
  return (
    <section className="home__products">
      {data &&
        data.map((product: ProductsType, index: number) => (
          <Product
            key={index}
            productName={product.productName}
            descriptionShort={product.descriptionShort}
            photo={product.photo}
            price={product.price}
          />
        ))}
    </section>
  );
};

export default Products;
