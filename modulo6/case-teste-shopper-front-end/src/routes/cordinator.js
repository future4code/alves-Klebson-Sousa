export const goToHomePage = (navigate) => {
    navigate('/')
}
export const goToRegisterOrder = (navigate) => {
    navigate('client/register')
}
export const goToProductsPage = (navigate) => {
    navigate('/products')
}
export const goToOrderSummary = (navigate, id) => {
    navigate(`/client/order-purchase/${id}`)
}

