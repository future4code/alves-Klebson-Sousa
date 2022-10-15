import React from "react";
import {
  Container,
  ButtonADD,
  Price,
  Quantity,
  Title,
  DivButton,
  ButtonOrder,
} from "./productCartStyle";

const ProductCard = ({ product, aaddToCart }) => {
  

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
      <DivButton>
        <ButtonADD onClick={() => aaddToCart(product)}>+ Adicionar</ButtonADD>
      </DivButton>
    </Container>
  );
};
export default ProductCard;
