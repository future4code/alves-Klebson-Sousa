import {BrowserRouter, Routes, Route} from "react-router-dom"
import HomePage from "../pages/homePage/HomePage"
import OrderSummary from "../pages/orderSummary/OrderSummary"
import PizzasMenuPage from "../pages/pizzasMenuPages.js/PizzasMenuPage"
import Login from "../pages/login/Login"
import SignUp from "../pages/signUp/SignUp"


const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route index element={<HomePage/>}/>
                <Route path='/api/login' element={<Login/>}/>
                <Route path='/api/signUp' element={<SignUp/>}/>
                <Route path='/api/menu' element={<PizzasMenuPage/>}/>
                <Route path='/api/orders' element={<OrderSummary/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router