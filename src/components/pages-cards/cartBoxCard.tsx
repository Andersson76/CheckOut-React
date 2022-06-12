import { CSSProperties, FC } from "react"
import { CartItem } from "../context/cart-context"
import { fontFamily, styleBtn, textStyle } from "../../css/common"

interface Props {
    cartItem: CartItem
}

const CartBox: FC<Props> = (props) => {

    return (
        <div>
             {/* <div style={textBox1}>
                    <div>
                        <img style={imgStyle} src={props.cartItem.product.image} alt="" />
                    </div> 
            
            <div style={{...textStyle, ...fontFamily, paddingLeft: "25px"}}>
                        <h3>{props.cartItem.product.title} </h3>
                        <p>Färg: {props.cartItem.product.color} </p>
                        <p>Pris: {props.cartItem.product.price} kr</p>
            </div>
        </div> */}
        </div>
    )
}



export default CartBox

const cartBoxStyle: CSSProperties = {

}