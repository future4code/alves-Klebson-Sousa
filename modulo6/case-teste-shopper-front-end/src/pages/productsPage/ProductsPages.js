import axios from "axios";
import React, { useContext } from "react";
import { useEffect, useState } from "react";
import Header from "../../components/Header";
import ProductCard from "../../components/ProductCard";
import GlobalStateContext from "../../global/GlobalStateContext";
import { useProtectedPage } from "../../hooks/useProtetedPage";
import OrderSummary from "../orderSummary/OrderSummary";
import { ContainerSection } from "./style";

const ProductsPage = () => {
  const { aaddToCart, cart, productsStock, products, removeFormCart } =
    useContext(GlobalStateContext);

    useProtectedPage()

  useEffect(() => {
    productsStock();
  }, []);

  return (
    <ContainerSection>
      <Header title={"Boas Compras"} backP />
      <ul>
        {products.map((product) => {
          return (
            <ProductCard
              product={product}
              key={product.id}
              aaddToCart={aaddToCart}
            />
          );
        })}
      </ul>      
    </ContainerSection>
  );
};

export default ProductsPage;
