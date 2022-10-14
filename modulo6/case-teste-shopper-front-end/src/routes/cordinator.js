export const goToRegisterOrder = (navigate) => {
    navigate('client/register')
}
export const goToProductsPage = (navigate) => {
    navigate('/')
}
export const goToOrderSummary = (navigate, id) => {
    navigate(`/client/order-purchase/${id}`)
}

