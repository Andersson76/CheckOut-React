import { CSSProperties, FC} from "react"
import { colors } from "../data/colors"
import { fontFamily } from "../css/common"
import kort from "../assets/kort.jpg"
import swish from "../assets/swish.png"
import resurs from "../assets/resurs.png"

interface Props {}


const Footer: FC<Props> = (props) => {

    return (
        <>
        <div> 
            <div style={{...footerStyle, ...fontFamily, paddingTop: "10px"}}>
                <img src={kort}  style={{padding: "10px", maxWidth: "50px"}}></img>
                <img src={swish} style={{padding: "10px",  maxWidth: "50px"}}></img>
                <img src={resurs} style={{padding: "10px",  maxWidth: "50px"}}></img>
            </div>
            <p style={{...fontFamily, color: colors.secondary, margin: "0px"}}>© 2022</p>
        </div>
        </>
    )
}

export default Footer


const footerStyle: CSSProperties = {
    borderTop: "1px solid #D0D0D0",
    display: "flex",
    justifyContent: "center"
}