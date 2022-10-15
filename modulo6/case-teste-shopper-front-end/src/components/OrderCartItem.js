import styled from "styled-components"

export const MainLi = styled.li`
    display: flex;
    flex-direction: column;
    background-color: rgb(213, 235, 227);
    div {
        display: flex;
        justify-content: space-between;
        margin: 20px;
        color: rgb(45, 167, 122);
        button {
            width: 10% ;
            height: 2%;
            font-size: 1.5em;
            background-color: transparent;
            border: none;
            margin: 10px;
            text-align: center;
        }
    }
    h3 {
        /* text-align: center; */
    }
`
export const Container = styled.span`
    display: flex;
    justify-content: space-evenly;
    
`

const OrderCartItem = ({purchase, removeFormCart}) => {
    return(
        <MainLi>
            <hr/>
            <div>
                <h3>{purchase.name} X</h3>
                <button onClick={()=> removeFormCart(purchase)}> x </button>
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