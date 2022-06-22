
import { FC } from "react"
import Navmenu from "./navmenu"
import Home from "./pages/home"
import Footer from "./footer"
import Content from "./content"
import CartProvider from "./context/cart-context" 
import Banner from "./banner"
import ShippingProvider from "./context/checkout-context/shipping-context"


const Layout: FC = () => {
    return (
        <div>
            {/* <ShippingProvider>  */}
                <CartProvider>
                    <Banner/>
                    <Navmenu/>
                    <Content/>
                    <Footer/>
                </CartProvider>
         {/*    </ShippingProvider> */} 
        </div>
    )
}           

export default Layout
