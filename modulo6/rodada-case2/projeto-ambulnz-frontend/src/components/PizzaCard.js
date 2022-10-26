import { useContext } from "react";
import { GlobalStateContext } from "../global/GlobalContex";
import { Container } from "./pizzaCardStyle";

function PizzaCard({ pizza }) {

  const { addToCart } = useContext(GlobalStateContext);

  return (    
      <Container>
        <h3>{pizza.name}</h3>
        <p className="card-price">
            {pizza.price.toLocaleString(
            'pt-br', 
            {style: 'currency', currency: 'USD'}
        )}
        </p>
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
