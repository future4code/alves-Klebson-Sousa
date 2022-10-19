import styled from "styled-components"

export const MainLi = styled.li`
    display: flex;
    flex-direction: column;
    background-color: rgb(213, 235, 227);
    div {
        height: 8vh;
        display: flex;
        justify-content: space-between;
        margin: 20px;
        color: rgb(45, 167, 122);
        button {
            width: 10% ;
            height: 35%;
            font-size: 1.5em;
            background-color: transparent;
            border: none;
            margin: 10px;
            text-align: center;
            :hover {
                font-size: 2rem;
            }
        }
    }
    h3 {
        /* text-align: center; */
    }
`
export const Container = styled.span`
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 10px;    
`

const OrderCartItem = ({purchase, listProducts, removeFromCart}) => { 
    
    return(
        <MainLi>
            <hr/>
            <div>
                <h3>{purchase.name}</h3>
                <button onClick={()=> removeFromCart(purchase)}> x </button>
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