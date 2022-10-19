import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import OrderCartItem from "../../components/OrderCartItem";
import GlobalStateContext from "../../global/GlobalStateContext";
import { goToProductsPage } from "../../routes/cordinator";
import { ContainerSection, DivTitle, TitleOrder, TotalOrder, ButtonFinish } from "./style";

const OrderSummary = () => {
  const { cart, removeFromCart, listProducts, total, confirmeOrder } = useContext(GlobalStateContext);

  const navigate = useNavigate();  

  return (
    <ContainerSection>
      <DivTitle>
        <button onClick={() => goToProductsPage(navigate)}>{"<"}</button>
        <TitleOrder>Resumo do pedido</TitleOrder>
      </DivTitle>

      {cart.map((purchase) => {        
       
         return (<OrderCartItem
            key={purchase.name
            }
            purchase={purchase}
            removeFromCart={removeFromCart}
            listProducts={listProducts}
          />
         )
      })}


      <TotalOrder>Total: {total.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    })}</TotalOrder>
      <ButtonFinish onClick={confirmeOrder}>Finalizar Pedido</ButtonFinish>
    </ContainerSection>
  );
};
export default OrderSummary;
