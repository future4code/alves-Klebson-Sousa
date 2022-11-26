import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { goToHomePage } from "../routes/coordinator"

export const useProtectedPage = () => {
    const navigate = useNavigate()

    const token = localStorage.getItem('token')
    useEffect(() => {

        if(!token){
            goToHomePage(navigate)
        }
    }, [])
}