export const goToHomePage = (navigate) => {
    navigate('/')
}
export const goToAdminPage = (navigate) => {
    navigate('/api/admin')
}
export const goToPizzasMenuPage = (navigate) => {
    navigate('/api/pizzas/menu')
}
export const goToBack = (navigate) => {
    navigate(-1)
}
export const goToSignUp = (navigate) => {
    navigate('/api/signUp')
}
export const goToSignUpAddress = (navigate) => {
    navigate('/api/signUpAddress')
}
export const goToLogin = (navigate) => {
    navigate('/api/login')
}

export const goToOrderSummaryCard = (navigate) => {
    navigate('/api/orders')
}