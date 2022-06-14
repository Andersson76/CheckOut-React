import { CSSProperties, FC} from "react"
import { colors } from "../data/colors"
import { fontFamily } from "../css/common"
import kort from "../assets/kort.jpg"
import swish from "../assets/swish.png"
import bankid from "../assets/bankid.png"

interface Props {}
   

/* Betalningsmedlerna i footern? */

const Footer: FC<Props> = (props) => {

    return (
        <>
        <div style={{...footerStyle, ...fontFamily, paddingTop: "10px"}}>
            <div>
                <img src={kort} width="50" height="30" style={{padding: "10px"}}></img>
                <img src={swish} width="50" height="30" style={{padding: "10px"}}></img>
                <img src={bankid} width="50" height="30" style={{padding: "10px"}}></img>
            </div>
        </div>
        <p style={{...fontFamily, color: colors.secondary, margin: "0px"}}>© 2022</p>
        </>
    )
}

export default Footer


const footerStyle: CSSProperties = {
    borderTop: "1px solid #D0D0D0",
    display: "flex",
    justifyContent: "center"
}