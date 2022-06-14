import { CSSProperties, FC } from "react"
import { CartItem } from "../context/cart-context"
import { fontFamily, styleBtn, textStyle } from "../../css/common"



/* Stylning för Lagt till i varukorg-popup - Denna delen ska ploppa upp när man lägger till i varukorgen - logiken är inte klar */


/* interface Props {
    cartItem: CartItem
}

const CartBox: FC<Props> = (props) => {

    return (
      
           
           <div style={cartCardStyle}>
           <div>
               <h4 style={{fontSize:"12px", ...fontFamily}}>Lagt i varukorgen</h4>
           </div>
           <div style={textBoxCart}>
               <div>
                   <img style={imgCartBox} src={props.cartItem.product.image} alt="" />
               </div> 
       
           <div style={{fontSize: "10px", ...fontFamily, paddingLeft: "25px"}}>
               <h3>{props.cartItem.product.title} </h3>
               <p>Färg: {props.cartItem.product.color} </p>
               <p>Pris: {props.cartItem.product.price} kr</p>
              
               <Button style={styleBtn} onMouseOver={changeBackground} variant="contained" 
                   onClick={() => console.log("clicked")}>Gå till kassan
               </Button>
           </div>
           </div>
       </div>
    )
}



export default CartBox */

const imgCartBox: CSSProperties = {
    width: "80px",
    height: "120px",
    objectFit: "cover",
}

const cartCardStyle: CSSProperties = {
    width: "30%",
    boxSizing: "border-box", 
    borderBottom: "1px solid #D0D0D0", 
    borderTop: "1px solid #D0D0D0",
    paddingLeft: "50px",
    backgroundColor: "white"
}

const textBoxCart: CSSProperties = {
    display: "flex",
    flex: "1",
    marginBottom: "10px"
}