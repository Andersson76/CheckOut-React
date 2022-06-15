import { CSSProperties, FC } from 'react'
import { useContext } from "react"
import { Button } from '@mui/material'
import { textStyle, fontFamily, styleBtn, floatcontainer } from "../../css/common"
import {CartContext} from "../context/cart-context" 
import CheckoutCard from "../pages-cards/checkoutCard"
import { NavLink } from "react-router-dom"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import DefaultFormList from "../context/checkout-context/form"

interface Props {

}

const CheckOut: FC<Props> = (props) => {

    const { itemInCart, 
            getTotalPrice } = useContext(CartContext)

    function changeBackground(e) { // Typa upp e?
        e.target.style.background = "#044778";
    }

    return (
        
        <div> 
            <NavLink style={{...navigationBack, ...fontFamily}} 
                to={"/"}><ArrowBackIosIcon style={{fontSize: "1em"}}/>
                    Fortsätt  handla
            </NavLink>

            <div>
                {itemInCart.length == 0 ? null : 
                    <h2 style={{fontSize:"16px",  marginLeft: "230px", marginTop: "40px", ...fontFamily}}>
                        Produkter</h2> 
                }
                <div style={{display: "flex", justifyContent: "center", alignItems: "center", ...fontFamily}}>
                    {itemInCart.length === 0 ? 
                        <h2>Din varukorg är tom</h2> 
                        : null}
                </div>
            </div>
                <div>
                    {itemInCart.map((cartItem) => 
                        <CheckoutCard cartItem={cartItem} />
                    )}
                
                <div style={{...floatcontainer, ...fontFamily}}>
                 <div style={textBoxItems}> 
                        <div style={{...textStyle, ...fontFamily, paddingLeft: "25px"}}>
                            <div style={{display: "flex", justifyContent: "space-between", marginTop: "40px"}}>
                            
                            {itemInCart.length === 0 ? null :
                            <div>
                                <h3>Kunduppgifter</h3>
                                    <DefaultFormList/>
                            </div>
                            }
                                
                        </div>
                    </div>
                </div>
                <div style={textBox}> 
                    <div style={{...textStyle, ...fontFamily}}>
                        {itemInCart.length == 0 ? null : 
                        <>
                            <h3 style={{fontSize: "16px"}}>
                                Totalsumma order:  
                                     {getTotalPrice()} kr
                            </h3>
                            <h4>
                                Frakt:
                            </h4>
                            <h4>
                                Betalsätt:
                            </h4>
                            <Button style={{...styleBtn, marginTop: "40px"}} 
                            onMouseOver={changeBackground} variant="contained" 
                                onClick={() => console.log("clicked")}>Slutför köp
                            </Button> 
                        </>
                        }
                    </div>
                </div>
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

const textBoxItems: CSSProperties = {
    display: "flex",
    flex: "1",
    marginLeft: "160px",
}  

const textBox: CSSProperties = {
    flex: "1",
    marginRight: "50px", 
    marginLeft: "50px",
}  