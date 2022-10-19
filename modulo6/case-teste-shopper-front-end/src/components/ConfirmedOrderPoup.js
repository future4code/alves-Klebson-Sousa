import { useContext } from "react"
import GlobalStateContext from "../global/GlobalStateContext"
import { ClosePopup, ContainerSection } from "./confirmedOrderStyle"
import OrderCartItem from "./OrderCartItem"

const ConfirmedOrderPopup = ({order, closePopup}) => {

    return (
        <ContainerSection>
            <ClosePopup>
            <h3>Resumo do Pedido</h3>
            <p>Pedido realizado com sucesso</p>
            <p>Id do pedido: {order.id}</p>
            {order.products.map((product) => (
                <p key={product.id}>
                    {product.name}
                    - {product.price}
                    {" "} x {product.quantity}
                </p>
            ))}
            <p>total pago: {order.total}</p>
                <span onClick={closePopup}>X</span>
            </ClosePopup>
        </ContainerSection>
    )
}

export default ConfirmedOrderPopup