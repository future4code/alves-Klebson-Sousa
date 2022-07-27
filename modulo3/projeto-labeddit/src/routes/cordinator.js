export const gotoLoginPage = (navigate) => {
    navigate("/")
}
export const goToSignUpPage = (navigate) => {
    navigate("/cadastro" )
}
export const goToPostPage = (navigate) => {
    navigate("/posts")
}
export const goToAddComment = (navigate, id) => {
    navigate(`/adicionar-comentario/${id}`)
}