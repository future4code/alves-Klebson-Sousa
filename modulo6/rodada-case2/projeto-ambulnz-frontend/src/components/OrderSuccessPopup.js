import { useContext } from "react";
import { GlobalStateContext } from "../global/GlobalContex";
import { ContainerDiv } from "./OrderSuccessPopupStyle";

function OrderSuccessPopup() {
  const { orderSuccessPopupState, closePopup, priceFormated } =
    useContext(GlobalStateContext);

  const request = orderSuccessPopupState.summary;

  return (
    <ContainerDiv>
      <div>
        <h2>{request.message}</h2>
        <h3>Resumo do pedido</h3>
        <p>Id do pedido: {request.order.id}</p>
        {request.order.pizzas.map((pizza) => (
          <p key={pizza.name}>
            Pizza {pizza.name} - {priceFormated(pizza.price)} x {pizza.quantity}
          </p>
        ))}
        <p>Total pago: {priceFormated(request.order.total)}</p>

        <span 
        className="close-popup" 
        onClick={closePopup}
        >
          X
        </span>
      </div>
    </ContainerDiv>
  );
}

export default OrderSuccessPopup;
