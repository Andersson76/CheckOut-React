import React from "react"
import { CSSProperties, FC } from "react"
import { colors } from "../../data/colors"
import { Product, productList } from '../../data/productlist' 
import ProductCard from "../products/productCard"
import { imgContainer, fontFamily, imgCategory, styleHeader  } from "../../css/common"
import { NavLink } from "react-router-dom"


interface Props {}

const Category1: FC<Props> = (props) => { /* Ta in categories... */


  const getCategory = productList.filter(product => {
      return product.categoryId === 1;
    });
  

   return (
       <>
       <div>
           <h2 style={{...fontFamily, ...styleHeader}}>Dam</h2>
      </div>
      <div style={{...imgCategory}}>
      {getCategory.map(product => {
          return (
          <div key={product.id}>  {/* Istället för hela logiken nedan vill vi hämta CategoryCard */}
          <div style={headText}>
              <div style={{...fontFamily, paddingBottom: "2.5em"}}>
                  <NavLink to={`/${product.id}`}>
                      <img style={imgStyle} src={product.image}/>
                  </NavLink>
          
              <div style={{...textBox, ...textImage}}>
                  <h3 style={{...titleStyle, fontSize: "14px"}}>{product.title}</h3><p style={{...priceStyle, fontSize: "12px"}}>{product.price + " " + "kr"}</p>
              </div>
          </div>
      </div>
  </div>
              );
          })}
      </div>
      </>
   )

}


export default Category1

const headText: CSSProperties = {
    position: "relative"
  }
  
  const textImage: CSSProperties = {
    position: "absolute",
    bottom: "11.5%",
    backgroundColor: colors.secondary,
    opacity: "0.75",
    width: "90%"
  }
  
  
  const imgStyle: CSSProperties = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  
    width: "200px",
    height: "300px",
    objectFit: "cover", 
    /* Zoomeffekt på bilder */
  }
  
  const textBox: CSSProperties = {
    display: "flex",
    justifyContent: "space-between",
    textAlign: "center",
    paddingLeft: "10px",
    paddingRight: "10px",
  
  }
  
  
  const titleStyle: CSSProperties = {
    display: "inline-block", 
    fontSize: "18px"
  }
  
  const priceStyle: CSSProperties = {
    display: "flex",
    justifyContent: "flex-end"
  }
  
  
  
  
  