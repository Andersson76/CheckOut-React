import { CSSProperties, FC, useState } from "react"
import React from "react"
import { NavLink } from 'react-router-dom'
import { colors } from '../../data/colors'
import { Product, productList } from '../../data/productlist' 
import { fontFamily } from "../../css/common"


interface Props {
    product: Product
}

/* Det som ligger category är rätt stylning men ska ligga här */

const CategoryCard: FC<Props> = (props) => {

    return (
        <div style={{...fontFamily, paddingBottom: "2.5em"}}>
            <NavLink to={`/${props.product.id}`}>
                <img style={imgStyle} src={props.product.image}/>
            </NavLink>

            <div style={textBox}>
                  <h2 style={{...titleStyle, fontSize: "14px"}}>{props.product.title}</h2>
                  <p style={{...priceStyle, fontSize: "12px"}}>{props.product.price + " " + "kr"}</p>
                </div>
        </div>
    ) 
}

export default CategoryCard 


const imgStyle: CSSProperties = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  
    width: "200px",
    height: "300px",
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





