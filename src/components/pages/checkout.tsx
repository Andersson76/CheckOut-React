import { CSSProperties, FC } from 'react'
import { useContext } from "react"
import { productList, Product } from "../../data/productlist"
import {Button, ButtonGroup} from '@mui/material'
import { textStyle, fontFamily, styleBtn } from "../../css/common"
import {CartContext} from "../context/cart-context" 
import CheckoutCard from "../pages-cards/checkoutCard"
import { NavLink } from "react-router-dom"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
/* import CartBox from "../pages-cards/cartBoxCard" */

interface Props {}

/* Sidan som renderar ut kassasidan  */


const CheckOut: FC<Props> = (props) => {

    const { itemInCart, getTotalPrice } = useContext(CartContext)

    function changeBackground(e) { // Typa upp e?
        e.target.style.background = "#044778";
        /* onMouseLeave */
}

    return (
        
        <div> {/* height: "100vh", */}

            <NavLink style={{...navigationBack, ...fontFamily}} to={"/"}><ArrowBackIosIcon style={{fontSize: "1em"}}/>
                Fortsätt  handla
            </NavLink>

            <div>
                {itemInCart.length == 0 ? null : 
                    <h2 style={{fontSize:"16px",  marginLeft: "160px", marginTop: "40px", ...fontFamily}}>
                        Produkter</h2> 
                }

            <div style={{display: "flex", justifyContent: "center", ...fontFamily}}>
                {itemInCart.length === 0 ? <h2>Varukorgen är tom</h2> : null}
            </div>

            </div>
                <div>
                    {
                    itemInCart.map((cartItem) => 
                        <CheckoutCard cartItem={cartItem} />
                        )
                    }
                    <div>
                    
                    <h2>Totalsumma order: {getTotalPrice()}</h2>
                    
                    <Button style={{...styleBtn, marginTop: "40px"}} onMouseOver={changeBackground} variant="contained" 
                        onClick={() => console.log("clicked")}>Slutför köp
                    </Button>
                    </div>
                </div>

            </div>
       
    )
}

export default CheckOut



const navigationBack: CSSProperties = {
    color: "black", 
    textDecoration: "none",
    margin: "160px",
    fontSize: "12px"
}