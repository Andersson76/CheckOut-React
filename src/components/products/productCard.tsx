import { CSSProperties, FC } from "react"
import React from "react"
import { NavLink } from 'react-router-dom'
import { Button } from '@mui/material'
import { colors } from '../../data/colors'
import { Product, productList } from '../../data/productlist' 
import { fontFamily } from "../../css/common"
import { fontSize } from "@mui/system"


interface Props {
  product: Product
}

const ProductCard: FC<Props> = (props) => {

    return (
        <div style={{...fontFamily, paddingBottom: "2.5em"}}>
            <NavLink to={`/${props.product.id}`}>
                <img style={imgStyle} src={props.product.image}/>
            </NavLink>
                <div style={textBox}>
                  <h2 style={titleStyle}>{props.product.title}</h2><span style={priceStyle}>{props.product.price + " " + "kr"}</span>
                </div>
            
          <div style={{display: "flex", justifyContent: "center"}}>
            <Button style={{...styleBtn, marginTop: "20px"}} variant="contained" 
                onClick={() => console.log(props.product)}>Lägg i varukorgen
            </Button>
        </div>
    ) 
}

export default ProductCard 

/* const btnStyle: CSSProperties = {
    backgroundColor: colors.third, 
    color: colors.secondary,
Fixa hover på knapparna samt centrera knapparna
} */


const imgStyle: CSSProperties = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  
    width: "300px",
    height: "400px",
    objectFit: "cover",
  }

  const textBox: CSSProperties = {
      display: "flex",
      justifyContent: "space-between",
      textAlign: "center"
  }

  const titleStyle: CSSProperties = {
    display: "inline-block", 
    fontSize: "18px"
  }

  const priceStyle: CSSProperties = {
    display: "flex",
    justifyContent: "flex-end"
 }


