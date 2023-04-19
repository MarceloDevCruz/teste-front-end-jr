import React, { useState } from 'react';
import { ProductsType } from '../types/products';
import Product from './Product';
import Pagination from './Pagination';

const Products = ({ data }: any) => {
  const [offSet, setOffSet] = useState(0);
  const total = 10;
  const limit = 4;

  return (
    <section className="home__products">
      <Pagination
        limit={limit}
        total={total}
        offSet={offSet}
        setOffSet={setOffSet}
      />
      {data
        .filter(
          (product: ProductsType, index: number) =>
            index >= offSet && index < offSet + limit
        )
        .map((product: ProductsType, index: number) => (
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
