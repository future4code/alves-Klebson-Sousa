import {BrowserRouter, Routes, Route} from "react-router-dom"
import OrderSummary from "../pages/orderSummary/OrderSummary"
import PizzasMenuPage from "../pages/pizzasMenuPages.js/PizzasMenuPage"

const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route index element={<PizzasMenuPage/>}/>
                <Route path='/api/orders' element={<OrderSummary/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router