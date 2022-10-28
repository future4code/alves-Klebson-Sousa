import { useContext } from "react";
import { GlobalStateContext } from "../global/GlobalContex";
import { ContainerLi, Price, Section1, Section2 } from "./orderItemCardStyle";

function OrderItemCard({ pizza }) {
  const { remoFromCart, priceFormated, addToCart } = useContext(GlobalStateContext);

  return (
    <ContainerLi>
      <Section1>
        <img src={pizza.imageUrl} alt="Imagen de pizza" />
        <p>Pizza {pizza.name}</p>
      </Section1>
      <Section2>
        <div>
          <button onClick={() => remoFromCart(pizza)}>-</button>
          <p>{pizza.quantity}</p>
          <button onClick={() => addToCart(pizza)}>+</button>
        </div>
      </Section2>
        <Price>{priceFormated(pizza.price * pizza.quantity)}</Price>

      
    </ContainerLi>
  );
}

export default OrderItemCard;
