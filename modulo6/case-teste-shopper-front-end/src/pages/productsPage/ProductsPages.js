import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard";
import { BASE_URL } from "../../constants/baseUrl";
import { ContainerSection } from "./productsPage.styled"

const ProductsPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/products`)
      .then((res) => {
        setProducts(res.data.products);
      })
      .catch((error) => {
        console.log(error.res);
      });
  }, []);

  return (
    <ContainerSection>
      <header>
        <h1>Logo</h1>
        <button>Crie sua lista de compras</button>
      </header>
      <ul>
        {products.map((product) => {
          return <ProductCard product={product} key={product.id} />;
        })}
      </ul>
    </ContainerSection>
  );
};

export default ProductsPage;
