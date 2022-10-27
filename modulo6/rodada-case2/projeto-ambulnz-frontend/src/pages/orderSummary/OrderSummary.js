import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import OrderItemCard from "../../components/OrderItemCard";
import OrderSuccessPopup from "../../components/OrderSuccessPopup";
import { GlobalStateContext } from "../../global/GlobalContex";
import { goToPizzasMenuPage } from "../../routes/coordinator";
import { ContainerSection, MainContainer } from "./style";

function OrderSummary() {
  const { cart, total, confirmOrder, orderSuccessPopupState, priceFormated } = useContext(GlobalStateContext);

  const navigate = useNavigate();

  return (
    <MainContainer>
      <ContainerSection>
        <button onClick={() => goToPizzasMenuPage(navigate)}>retornar</button>
        <h1>Resumo do Pedido</h1>
        {cart.map((pizza) => {
          return <OrderItemCard key={pizza.name} pizza={pizza} />;
        })}
        <h2>
          Total:{" "}
          {priceFormated(total)}
        </h2>
        <button onClick={confirmOrder}>Confirmar pedido</button>
      </ContainerSection>
          {orderSuccessPopupState.isActive && <OrderSuccessPopup/>}
    </MainContainer>
  );
}

export default OrderSummary;
