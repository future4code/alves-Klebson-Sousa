import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import OrderCartItem from "../../components/OrderCartItem";
import GlobalStateContext from "../../global/GlobalStateContext";
import { goToProductsPage } from "../../routes/cordinator";
import { ContainerSection, DivTitle, TitleOrder, TotalOrder, ButtonFinish } from "./style";

const OrderSummary = () => {
  const { cart, removeFormCart, listPurchase } = useContext(GlobalStateContext);

  const navigate = useNavigate();

  const calculateTotal = () => {
    const total = cart.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    return total.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    });
  };
  

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
            removeFormCart={removeFormCart}
            listPurchase={listPurchase}
          />
         )
      })}


      <TotalOrder>Total: {calculateTotal()}</TotalOrder>
      <ButtonFinish>Finalizar Pedido</ButtonFinish>
    </ContainerSection>
  );
};
export default OrderSummary;
