import React, { useContext } from "react";
import { useEffect } from "react";
import ConfirmedOrderPopup from "../../components/ConfirmedOrderPoup";
import Header from "../../components/Header";
import ProductCard from "../../components/ProductCard";
import GlobalStateContext from "../../global/GlobalStateContext";
import { useProtectedPage } from "../../hooks/useProtetedPage";
import OrderSummary from "../orderSummary/OrderSummary";
import { ContainerSection } from "./style";

const ProductsPage = () => {
  const { productsStock, products, confirmedOrderPopupState, closePopup } =
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
            />
          );
        })}
      </ul>
      <OrderSummary/>
      { confirmedOrderPopupState.isActive 
      && <ConfirmedOrderPopup 
      order={confirmedOrderPopupState.summary}
      closePopup={closePopup}
      />  
      }
           
    </ContainerSection>
  );
};

export default ProductsPage;
