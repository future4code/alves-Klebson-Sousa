import axios from "axios"
import React, { useState } from "react"
import { BASE_URL } from "../constants/baseUrl"
import GlobalStateContext from "./GlobalStateContext"

const GlobalState = (props) => {
    const [cart, setCart] = useState([])

        const aaddToCart = (addList) => {
            const foundIndex = cart.findIndex((listInCart) => listInCart.name === addList.name)
            
            if(foundIndex >= 0) {
                const newCart = [...cart]
                newCart[foundIndex].quantity += 1
                setCart(newCart)
            } else {
                const newCart = [...cart]
                const newListPurchase = {
                    name: addList.name,
                    price: addList.price,
                    quantity: 1
                }
                newCart.push(newListPurchase)
                setCart(newCart)
            }

        }

    // const orderId = localStorage.getItem("orderId")

    // const createPurchaselist = async (product) => {
    //     const body = {    
    //         "listPurchase": [
    //             {
    //                 "productName": product.name,
    //                 "quantity": 1
    //             }
    //         ]
    //     }
    //     await axios.post(`${BASE_URL}/client/order-purchase/${orderId}`)
    // }

    const data = {cart, setCart, aaddToCart}

    return(
        <GlobalStateContext.Provider value={data}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState