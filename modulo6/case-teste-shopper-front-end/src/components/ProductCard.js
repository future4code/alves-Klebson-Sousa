import React from "react";
import { Container, ButtonADD, Price, Quantity, Title} from "./productCard.styled"


const ProductCard = ({ product }) => {
  return (
    <Container>
      <Title>{product.name}</Title>
      <Price>
        {product.price.toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",
        })}
      </Price>
      <Quantity>Quantidade em estoque - {product.qtyStock}</Quantity>
      <ButtonADD>+ adicionar</ButtonADD>
    </Container>
  );
};
export default ProductCard;
