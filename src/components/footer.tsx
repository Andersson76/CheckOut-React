import React from "react"
import { CSSProperties, FC} from "react"
import { colors } from "../data/colors"
import { fontFamily } from "../css/common"

interface Props {}
   

/* Betalningsmedlerna i footern? */

const Footer: FC<Props> = (props) => {

    return (
        <div style={{...footerStyle, ...fontFamily}}>
            <p>© 2022</p>
        </div>
    )
}

export default Footer


const footerStyle: CSSProperties = {
    color: colors.secondary,
    borderTop: "1px solid #D0D0D0"

}