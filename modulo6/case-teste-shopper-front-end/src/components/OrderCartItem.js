import { useContext } from "react"
import GlobalStateContext from "../global/GlobalStateContext"
import { MainLi, Container, ButtonRemove } from "./orderCartItemStyle"
import IconTrashCan from "../assets/IconTrashCan.png"

const OrderCartItem = ({purchase}) => { 
    const {removeFromCart} = useContext(GlobalStateContext)
    
    return(
        <MainLi>
            <hr/>
            <div>
                <h3>{purchase.name}</h3>
                <ButtonRemove onClick={()=> removeFromCart(purchase)} src={IconTrashCan}></ButtonRemove>
            </div>

            <Container>
                <p>{purchase.price.toLocaleString(  
                    'pt-br',
                    { style: 'currency', currency: 'BRL' }
                )} x {purchase.quantity}
                </p>
                <p>Subtotal: {(purchase.price * purchase.quantity).toLocaleString(
                    'pt-br',
                    { style: 'currency', currency: 'BRL' }
                )}</p>
            </Container>
            <hr/>
            
        </MainLi>
    )
}
export default OrderCartItem