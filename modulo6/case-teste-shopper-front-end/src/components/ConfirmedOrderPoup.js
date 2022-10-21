import { useContext } from "react";
import GlobalStateContext from "../global/GlobalStateContext";
import { ClosePopup, ContainerSection } from "./confirmedOrderStyle";
import moment from "moment/moment";

const ConfirmedOrderPopup = () => {
  const { confirmedOrderPopupState, closePopup, total } =
    useContext(GlobalStateContext);
  const purchase = confirmedOrderPopupState.summary;

  const formatDate = purchase.order.deliveryDate;
  const separateDate = formatDate.split("T");
  const newDate = separateDate[0].split("-").reverse().join("/");

  return (
    <ContainerSection>
      <ClosePopup>
        <h2>Resumo do Pedido</h2>
        <h3>Data para entrega: {newDate}</h3>
        <p>Pedido realizado com sucesso</p>
        <p>Id do pedido: {purchase.order.id}</p>
        {purchase.order.products.map((product) => (
          <p key={product.id}>
            {product.name}
            {" - "}{" "}
            {product.price.toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })}{" "}
            x {product.quantity}
          </p>
        ))}
        <h3>
          Total pago:{" "}
          {purchase.order.total.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </h3>
        <span onClick={closePopup}>X</span>
      </ClosePopup>
    </ContainerSection>
  );
};

export default ConfirmedOrderPopup;
