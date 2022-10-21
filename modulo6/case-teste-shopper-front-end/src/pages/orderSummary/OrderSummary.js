import { useContext, useEffect } from "react";
import OrderCartItem from "../../components/OrderCartItem"
import GlobalStateContext from "../../global/GlobalStateContext";
import IconCart2 from "../../assets/IconCart2.jpg";
import IconClose from "../../assets/IconClose.png";
import {
  ContainerSection,
  DivTitle,
  TitleOrder,
  TotalOrder,
  ButtonFinish,
  Section,
  CartButton,
} from "./orderStyle";

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

  useEffect(() => {
    if (cart.length < 1) setPopuptCartState(false);    
  }, [cart])
  
  

  return (
    <ContainerSection>
      <DivTitle>        
        {cart.length === 0 ? (
          <TitleOrder>Ops Carrinho vazio!</TitleOrder>
        ) : (
          <TitleOrder>Resumo do pedido</TitleOrder>
        )}
        {popuptCartState && cart.length > 0 ? (
          <CartButton onClick={hideCart} src={IconClose}></CartButton>
        ) : (
          <CartButton onClick={popupCart} src={IconCart2}></CartButton>
        )}
      </DivTitle>
      <Section>
        {popuptCartState && cart.length > 0 ? (
          cart.map((purchase) => {
            return <OrderCartItem key={purchase.name} purchase={purchase} />;
          })
        ) : (
          <></>
        )}
      </Section>

      {cart.length > 0 ? (
        <>
          <TotalOrder>
            Total:{" "}
            {total.toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })}
          </TotalOrder>
          <ButtonFinish onClick={confirmeOrder}>Finalizar Pedido</ButtonFinish>
        </>
      ) : (
        <></>
      )}
    </ContainerSection>
  );
};
export default OrderSummary;
