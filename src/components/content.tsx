import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { Product } from "../data/productlist";
import Home from "./pages/home"
import Products from "./pages/product"
import ProductDetail from "./products/productDetail"
import CheckOut from "./pages/checkout"
import Category from "./categories/category"
import Category1 from "./categories/category1"
import Category2 from "./categories/category2"


interface Props {}

const Content: FC<Props> = (props) => {
    
    return (
        <>
            <Routes>
                <Route path="/" element={<Home/>}></Route>   
                <Route path="/product" element={<Products/>}></Route>   
                <Route path="/:productId" element={<ProductDetail/>}></Route>  
                <Route path="/checkout" element={<CheckOut/>}></Route> 
                <Route path='/category' element={<Category/>}></Route> 
                <Route path='/category1' element={<Category1/>}></Route> 
                <Route path='/category2' element={<Category2/>}></Route> 
            </Routes>
        </>
    )
}


export default Content