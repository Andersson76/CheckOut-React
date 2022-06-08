
import { CSSProperties, FC, useContext } from 'react';
import { Link } from 'react-router-dom';
import { colors } from '../data/colors';
import { Product} from '../data/productlist';
import { fontLogo, fontFamily } from "../css/common"
import logo from "../assets/logo.jpg"

import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';

import { CartContext } from "./cart-context" // Flytta logiken till Cart-komponent (egen fil...)

interface Props {}

const Navmenu: FC<Props> = (props) => {

  // Flytta logiken till Cart-komponent?
 /*  const [cart, setcart] = useContext(CartContext) */

 const { cart } = useContext(CartContext)
 console.log(cart)

    return (
        <div>
             <div style={{...styleNavmenu, ...fontFamily}}>
           <div>
           <Link style={{color: "black", textDecoration: "none", ...fontLogo}} to={"/"}><img src={logo} width="40" height="30"></img></Link>
           </div> 
           <div>
              <Link style={navLinks} to={"/"}>HEM</Link>
              <Link style={navLinks} to={"/product"}>{}PRODUKTER</Link>
              <Link style={navLinks} to={"/category"}>{}HERR</Link>
              <Link style={navLinks} to={"/category1"}>{}DAM</Link>
              <Link style={navLinks} to={"/category2"}>{}ASSEC</Link>
           </div>
         
           <div> 
             <Link style={navLinks} to={"/checkout"}>{<ShoppingBagOutlinedIcon/>}</Link> {/* Flytta logiken till Cart-komponent?  */}
           {/*   <span>Item in cart: {cart.length}</span>
              <span>Total price:0</span>  */}
             <Link style={navLinks} to={"/checkout"}>{<FacebookOutlinedIcon/>}</Link>
             <Link style={navLinks} to={"/checkout"}>{<SubscriptionsOutlinedIcon/>}</Link>
           </div>
             
         </div>
        </div>
    );
}


export default Navmenu

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

