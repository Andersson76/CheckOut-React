import { FC } from "react"
import { Routes, Route, Link } from "react-router-dom"
import CheckOut from "./checkout-page"
import Startpage from "./startpage"
import ProductPage from "./product-page2"

// Importerat routes, route, link samt returnerat pathen */
// Importerat våra sidor på sidan samt skapat pathen

interface Props {}

const ContentPage: React.FC<Props> = (props) => {
    
    return(
        <Routes>
            <Route path="/" element= { <Startpage/> } />
            <Route path="/:productId" element= { <ProductPage/> } />
            <Route path="/checkout-page" element={ <CheckOut/> } />
        </Routes>
    )
}

export default ContentPage


/* import { NavLink } from "react-router-dom" 

<NavLink to="./pages/startpage">Home</NavLink>  */


