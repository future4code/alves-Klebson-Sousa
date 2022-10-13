import { BrowserRouter, Routes, Route } from "react-router-dom"
import ProductsPage from "../pages/productsPage/ProductsPages"
import RegisterOrder from "../pages/registerOrder/RegisterOrder"

const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route index element={<ProductsPage/>}/>
                <Route path='/client/register' element={<RegisterOrder/>}/>
                <Route path='/' element={<ProductsPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router