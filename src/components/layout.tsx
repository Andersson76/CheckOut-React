
import { FC } from "react"
import Navmenu from "./navmenu"
import Home from "./pages/home"
import Footer from "./footer"
import Content from "./content"
import CartProvider from "../components/cart-context" 



const Layout: FC = () => {
    return (
        <CartProvider>
            <div>
                <Navmenu/>
                    <Content/>
                <Footer/>
            </div>
        </CartProvider>
    )
}


export default Layout
