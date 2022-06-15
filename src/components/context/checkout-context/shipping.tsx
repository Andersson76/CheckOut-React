import { FC, CSSProperties, useContext, useState } from "react" 
import { Shipping } from "../../../data/shippingList"

interface Props {
 /*    shipping: Shipping[] */
}

const ShippingCard: FC<Props> = (props) => {

const [shippingState, setShippingState] = useState()

    return (
        <div>
            <ShippingCard></ShippingCard>
            
        </div>

    )
}

export default ShippingCard