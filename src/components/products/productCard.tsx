import { CSSProperties, FC } from "react"
import React from "react"
import { NavLink } from 'react-router-dom'
import { Button } from '@mui/material'
import { colors } from '../../data/colors'
import { Product, productList } from '../../data/productlist' 
import { fontFamily, styleBtn } from "../../css/common"
import { fontSize } from "@mui/system"
import { useCart} from "react-use-cart"


interface Props {
  product: Product
  addItems: Product 
}

const ProductCard: FC<Props> = (props) => {

  const {addItems} = useCart()

    return (
        <div style={{...fontFamily}}>
            <NavLink to={`/${props.product.id}`}>
                <img style={imgStyle} src={props.product.image}/>
            </NavLink>
                <div style={textBox}>
                  <h2 style={{...titleStyle, fontSize: "14px"}}>{props.product.title}</h2>
                  <p style={{...priceStyle, fontSize: "12px"}}>{props.product.price + " " + "kr"}</p>
                </div>
                <div style={textBox}>
                  <p style={{marginTop: "0px", color: colors.secondary, fontSize: "12px"}}>{props.product.shortDesc}</p>
                  <p style={{marginTop: "0px", color: colors.secondary, fontSize: "12px"}}>Färg: {props.product.color}</p>
                </div>
            
          <div style={{display: "flex", justifyContent: "center"}}>
            <Button style={{...styleBtn, marginTop: "20px"}} variant="contained" 
                onClick={() => addItems(props.product)}>Lägg i varukorgen
            </Button>
            </div>
        </div>
    ) 
}

export default ProductCard 


const imgStyle: CSSProperties = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  
    width: "280px",
    height: "380px",
    objectFit: "cover",
  }

  const textBox: CSSProperties = {
    display: "flex",
    justifyContent: "space-between",
    textAlign: "center",
    paddingLeft: "10px",
    paddingRight: "10px"
  }


  const titleStyle: CSSProperties = {
    display: "inline-block", 
    fontSize: "18px"
  }

  const priceStyle: CSSProperties = {
    display: "flex",
    justifyContent: "flex-end"
 }


