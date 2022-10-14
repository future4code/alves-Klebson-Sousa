import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { goToRegisterOrder } from "../routes/cordinator"

export const useProtectedPage = () => {
    const navigate = useNavigate()

    const orderId = localStorage.getItem("orderId")
    
    useEffect(() => {

        if (!orderId) {
            goToRegisterOrder(navigate)
        }

    }, [])
}