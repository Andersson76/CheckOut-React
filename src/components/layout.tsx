
import { FC } from "react"
import Navmenu from "./navmenu"
import Home from "./pages/home"
import Footer from "./footer"
import Content from "./content"
import CartProvider from "./context/cart-context" 
import Banner from "./banner"

/* Visar sidans komponenter */

const Layout: FC = () => {
    return (
        <CartProvider>
            <div>
                <Banner/>
                <Navmenu/>
                <Content/>
                <Footer/>
            </div>
        </CartProvider>
    )
}


export default Layout
