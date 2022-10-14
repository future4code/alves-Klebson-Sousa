import { useState } from "react"
import OrderCartItem from "../../components/OrderCartItem"
import { ContainerSection } from "./style"

const OrderSummary = ({cart}) => {
    
    const calculateTotal = () => {
        const total = cart.reduce(
            (acc, item) => (acc + item.price * item.quantity), 0)
        return total.toLocaleString(
            'pt-br',
            { style: 'currency', currency: 'BRL' }
        )
    }

    // const total = products.reduce((acc, product) => (acc + product.subTotal), 0)


    return(
        <ContainerSection>
            <h2>Resumo do pedido</h2>
            
            {cart.map((purchase) => {
                return(
                    <OrderCartItem key={purchase.name} purchase={purchase}/>
                )
            })}

            <h2>Total: {calculateTotal()}</h2>
            <button>Finalizar Pedido</button>
        </ContainerSection>
    )
}
export default OrderSummary