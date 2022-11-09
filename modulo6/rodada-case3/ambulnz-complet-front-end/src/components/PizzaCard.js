import { useContext } from "react";
import { GlobalStateContext } from "../global/GlobalContex";
import { AddCartButton, Container, ImageCard, Ingrdients } from "./pizzaCardStyle";
// import AddCart from "./../assets/AddCart.png"

function PizzaCard({ pizza }) {
  const { addToCart, priceFormated } = useContext(GlobalStateContext);

  return (
    <Container>
      <h3>{pizza.name}</h3>
      <ImageCard src={pizza.imageUrl} alt="Imagen de pizza"/>
      <p className="card-price">{priceFormated(pizza.price)}</p>      
      <Ingrdients>
        {pizza.ingredients.map((item) => {
          return <span key={item}>{item}; </span>;
        })}
      </Ingrdients>
      <AddCartButton onClick={() => addToCart(pizza)} />
    </Container>
  );
}

export default PizzaCard;
