/* 
import { CSSProperties, FC } from 'react';
import { Link } from 'react-router-dom';
import { colors } from '../data/colors';
import { Product} from '../data/productlist';

import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import { fontFamily } from "../css/common"

interface Props {}

const Navmenu: FC<Props> = (props) => {
    return (
        <div>
             <div style={{...styleNavmenu, ...fontFamily}}>
           <div>
             <Link style={{color: "black", textDecoration: "none"}} to={"/"}><h1 style={styleLogo}>Björn Borg</h1></Link>
           </div> 
           <div>
               <Link style={navLinks} to={"/"}>HEM</Link>
               <Link style={navLinks} to={"/product"}>{}PRODUKTER</Link>
               <Link style={navLinks} to={"/"}>{}OM OSS</Link>
               <Link style={navLinks} to={"/category"}>{}KATEGORI</Link>
               <Link style={navLinks} to={"/category2"}>{}KATEGORI2</Link>
           </div>
         
           <div>
             <Link style={navLinks} to={"/checkout"}>{<ShoppingBagOutlinedIcon/>}Varukorg</Link>
             <Link style={navLinks} to={"/checkout"}>{<FacebookOutlinedIcon/>}</Link>
             <Link style={navLinks} to={"/checkout"}>{<SubscriptionsOutlinedIcon/>}</Link>
           </div>
             
         </div>
        </div>
    );
}

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




export default Navmenu */