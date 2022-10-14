import styled from "styled-components"

export const MainLi = styled.li`
    display: flex;
    flex-direction: column;
    div {
        display: flex;
        justify-content: space-between;
        margin: 20px;
    }
    h3 {
        /* text-align: center; */
    }
`
export const Container = styled.span`
    display: flex;
    justify-content: space-evenly;
    
`

const OrderCartItem = ({purchase}) => {
    return(
        <MainLi>
            <div>
                <h3>{purchase.name} X</h3>
                <button> x </button>
            </div>

            <Container>
                <p>{purchase.price.toLocaleString(
                    'pt-br',
                    { style: 'currency', currency: 'BRL' }
                )}
                </p>
                <p>{purchase.quantity}</p>
            </Container>
            
        </MainLi>
    )
}
export default OrderCartItem