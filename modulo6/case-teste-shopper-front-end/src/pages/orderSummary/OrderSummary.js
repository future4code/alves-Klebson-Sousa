import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import OrderCartItem from "../../components/OrderCartItem";
import GlobalStateContext from "../../global/GlobalStateContext";
import { goToProductsPage } from "../../routes/cordinator";
import IconCart1 from "../../assets/IconCart1.jpg";
import IconClose from "../../assets/IconClose.png";
import {
  ContainerSection,
  DivTitle,
  TitleOrder,
  TotalOrder,
  ButtonFinish,
  Section,
  CartButton,
} from "./style";

const OrderSummary = () => {
  const {
    cart,
    total,
    confirmeOrder,
    popuptCartState,
    setPopuptCartState,
    popupCart,
    hideCart,
  } = useContext(GlobalStateContext);

  // const navigate = useNavigate();
  //   const [mostrarCart, setMostrarCart] = useState(false)
  // console.log(mostrarCart)
  //   const popup = () => {
  //     setMostrarCart(true)

  // }
  if (cart.length < 1) setPopuptCartState(false);
  console.log(total);
  return (
    <ContainerSection>
      <DivTitle>
        {popuptCartState && cart.length > 0 ? (
          <CartButton onClick={hideCart} src={IconClose}></CartButton>
        ) : (
          <CartButton onClick={popupCart} src={IconCart1}></CartButton>
        )}
        {cart.length === 0 ? (
          <TitleOrder>Ops! Carrinho vazio!</TitleOrder>
        ) : (
          <TitleOrder>Resumo do pedido</TitleOrder>
        )}
      </DivTitle>
      <Section>
        {popuptCartState ? (
          cart.map((purchase) => {
            return <OrderCartItem key={purchase.name} purchase={purchase} />;
          })
        ) : (
          <div></div>
        )}
      </Section>
      <TotalOrder>
        Total:{" "}
        {total.toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",
        })}
      </TotalOrder>
      <ButtonFinish onClick={confirmeOrder}>Finalizar Pedido</ButtonFinish>
    </ContainerSection>
  );
};
export default OrderSummary;
