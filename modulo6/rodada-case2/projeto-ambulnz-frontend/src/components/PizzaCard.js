import { useContext } from "react";
import { GlobalStateContext } from "../global/GlobalContex";
import { Container } from "./pizzaCardStyle";

function PizzaCard({ pizza }) {
  const { addToCart, priceFormated } = useContext(GlobalStateContext);

  return (
    <Container>
      <h3>{pizza.name}</h3>
      <img src={pizza.imageUrl} alt="Imagen de pizza"/>
      <p className="card-price">{priceFormated(pizza.price)}</p>
      <p>
        {pizza.ingredients.map((item) => {
          return <span key={item}>{item} </span>;
        })}
      </p>
      <button onClick={() => addToCart(pizza)}>Adiconar no carrinho</button>
    </Container>
  );
}

export default PizzaCard;
