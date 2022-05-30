import React, { useEffect, useState } from "react";
import { fetchProducts } from "../../api/client.api";
import { Product } from "../../types/common.types";
import { ProductCard } from "./product/product";
import "./product-page.css";


export const ProductPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      setProducts(await fetchProducts());
    };
    fetchData().catch((e) => console.error(e));
  }, []);
  return (
    <div className="product-page__container">
      {products.map((product) => (
        <ProductCard product={product} />
      ))}
    </div>
  );
};
