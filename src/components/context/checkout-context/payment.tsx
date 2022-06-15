import { FC, CSSProperties, useContext, useState } from "react"
import { Payment } from "../../../data/paymentList"

interface Props {}

const PaymentCard: FC<Props> = (props) => {

    const [state, setState] = useState<Payment[]>([])

    return (
        <div>
            <form>
            <PaymentCard></PaymentCard>
            </form> 
        </div>

    )
}

export default PaymentCard


