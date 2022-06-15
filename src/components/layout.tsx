
import { FC } from "react"
import Navmenu from "./navmenu"
import Home from "./pages/home"
import Footer from "./footer"
import Content from "./content"
import CartProvider from "./context/cart-context" 
import Banner from "./banner"
import Form from "../components/context/checkout-context/form"


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

{/* <Form></Form> 
<ShippingCard></ShippingCard>
<PaymentCard></PaymentCard>*/}
            

export default Layout
