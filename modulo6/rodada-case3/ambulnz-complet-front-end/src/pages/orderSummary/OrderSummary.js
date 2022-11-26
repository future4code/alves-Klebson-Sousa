import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import OrderItemCard from "../../components/OrderItemCard";
import OrderSuccessPopup from "../../components/OrderSuccessPopup";
import { GlobalStateContext } from "../../global/GlobalContex";
import { goToPizzasMenuPage } from "../../routes/coordinator";
import {
  ButtonConfirm,
  ContainerSection,
  GoTOBack,
  MainContainer,
  Posterimg,
} from "./style";

function OrderSummary() {
  const { cart, total, confirmOrder, orderSuccessPopupState, priceFormated } =
    useContext(GlobalStateContext);

  const navigate = useNavigate();

  return (
    <MainContainer>
      {cart ? <ContainerSection>
        <GoTOBack onClick={() => goToPizzasMenuPage(navigate)} />
        <h1>Resumo do Pedido</h1>
        <div>
          {cart.map((pizza) => {
            return <OrderItemCard key={pizza.name} pizza={pizza} />;
          })}
        </div>
        <h2>Total: {priceFormated(total)}</h2>
        <ButtonConfirm onClick={confirmOrder}>Confirmar pedido</ButtonConfirm>
      </ContainerSection> : 
      <div>
        <h2>Carregando...</h2>
        </div>}
      {orderSuccessPopupState.isActive && <OrderSuccessPopup />}
    </MainContainer>
  );
}

export default OrderSummary;
