import React, { Component } from "react";
import ReactDOM from "react-dom";
import { CSSProperties, FC} from "react"
import { BrowserRouter as Router,  NavLink, Route, Routes } from "react-router-dom"
/*  import  Routers from "./components/routers"  */
import Home from "./pages/home"
import Product from "./pages/product"
import Checkout from "./pages/checkout"
import ProductDetail from "./products/productDetail"
import Category from "./categories/category"
import Category2 from "./categories/category2"
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import Footer from "./footer"
import { fontFamily } from "../css/common"
import { colors } from "../data/colors"
import Cart from "./context/cart"


class App extends Component {

  render() {

    return (
      <Router> 
        <div style={{...styleNavmenu, ...fontFamily}}>
          <div>
            <NavLink style={{color: "black", textDecoration: "none"}} to={"/"}><h1 style={styleLogo}>Björn Borg</h1></NavLink>
          </div> 
          <div>
              <NavLink style={navLinks} to={"/"}>HEM</NavLink>
              <NavLink style={navLinks} to={"/product"}>{}PRODUKTER</NavLink>
              <NavLink style={navLinks} to={"/"}>{}OM OSS</NavLink>
              <NavLink style={navLinks} to={"/category"}>{}KATEGORI</NavLink>
              <NavLink style={navLinks} to={"/category2"}>{}KATEGORI2</NavLink>
          </div>
        
          <div>
            <NavLink style={navLinks} to={"/checkout"}>{<ShoppingBagOutlinedIcon/>}</NavLink>
            <NavLink style={navLinks} to={"/checkout"}>{<FacebookOutlinedIcon/>}</NavLink>
            <NavLink style={navLinks} to={"/checkout"}>{<SubscriptionsOutlinedIcon/>}</NavLink>
          </div>
            
        </div>

          <Routes> 
            <Route path='/' element={<Home/>}></Route>   
            <Route path='/product' element={<Product/>}></Route>   
            <Route path='/:productId' element={<ProductDetail/>}></Route>  
            <Route path='/checkout' element={<Checkout/>}></Route> 
            <Route path='/category' element={<Category/>}></Route> 
            <Route path='/category2' element={<Category2/>}></Route> 
          </Routes>
        </Router>         
        </Cart> 
    );  
  }
}


export default App


const navLinks: CSSProperties = {
  textDecoration: "none",
  margin: "8px",
  fontSize: "12px",
  color: colors.third
}


const styleLogo: CSSProperties = {
  fontSize: "22px"
}


const styleNavmenu: CSSProperties = {
  width: "100%",
  height: "80px",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  borderBottom: "1px solid #D0D0D0",
  marginBottom: "20px"
}
 
