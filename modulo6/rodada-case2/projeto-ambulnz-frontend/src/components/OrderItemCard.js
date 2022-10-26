import { useContext } from "react";
import { GlobalStateContext } from "../global/GlobalContex";
import { ContainerLi } from "./orderItemCardStyle";

function OrderItemCard({pizza}) {
    const { remoFromCart } = useContext(GlobalStateContext)

  return (
    <ContainerLi>
      <p>Pizza {pizza.name} - {pizza.price.toLocaleString(
        'pt-br', 
        {style: 'currency', currency: 'USD'}
    )} x {pizza.quantity}</p>
      <button onClick={() => remoFromCart(pizza)}>Excluir</button>
    </ContainerLi>
  );
}

export default OrderItemCard;
