import { useContext } from "react";
import { GlobalStateContext } from "../global/GlobalContex";

function OrderSuccessPopup() {
  const { orderSuccessPopupState} = useContext(GlobalStateContext)
  const order = orderSuccessPopupState.summary
  console.log(order)
  return (
    <div>
      <h3>Resumo do pedido</h3>
      <p>Id do pedido: {order.id}</p>
      {order.pizzas.map((pizza) => (
        <p>
          Pizza {pizza.name} -{" "}
          {pizza.price.toLocaleString("pt-br", {
            style: "currency",
            currency: "USD",
          })}{" "}
          x {pizza.quantity}
        </p>
      ))}
      <p>Total pago: {order.total}</p>
    </div>
  );
}

export default OrderSuccessPopup;
