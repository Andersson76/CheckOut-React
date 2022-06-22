import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home"
import Products from "./pages/product"
import CheckOut from "./pages/checkout"
import ProductDetail from "../components/pages-cards/productDetail"

interface Props {}

const Content: FC<Props> = (props) => {
    
    return (
        <>
        <Routes>
            <Route path="/" element={<Home/>}></Route>   
            <Route path="/product" element={<Products/>}></Route>   
            <Route path="/:productId" element={<ProductDetail/>}></Route>  
            <Route path="/checkout" element={<CheckOut/>}></Route> 
        </Routes>
        </>
    )
}


export default Content