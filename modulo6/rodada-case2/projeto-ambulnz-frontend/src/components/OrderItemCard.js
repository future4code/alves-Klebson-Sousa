import { useContext } from "react";
import { GlobalStateContext } from "../global/GlobalContex";
import { ContainerLi } from "./orderItemCardStyle";

function OrderItemCard({pizza}) {
    const { remoFromCart, priceFormated } = useContext(GlobalStateContext)

  return (
    <ContainerLi>
      <p>Pizza {pizza.name} - {priceFormated(pizza.price)} x {pizza.quantity}</p>
      <button onClick={() => remoFromCart(pizza)}>Excluir</button>
    </ContainerLi>
  );
}

export default OrderItemCard;
