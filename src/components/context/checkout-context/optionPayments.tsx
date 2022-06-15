import { FC, useState, PropsWithChildren } from "react"
import { Payment, paymentList } from "../../../data/paymentList"
import { Form} from 'formik';
import React from "react"    


interface Props{
   /*  paymentOption: Payment */
}

export interface OptionPaymentData {
    paymentOption: Payment[]
    /* funktion? */

}

const DefaultOptionPaymentData: OptionPaymentData = {
    paymentOption: []
     /* funktion som speglar optionpaymentData? */
}


export const PaymentContext = React.createContext<OptionPaymentData>(DefaultOptionPaymentData)
// sparar state i context för alla 3 valen och sen ett state för varje betalsätt 

const OptionPayment: FC<PropsWithChildren<Props>> = (props) => {

    const [optionPaymentState, setOptionPaymentState] = useState()

   /*  function onchange som state som sparas i proverden */


   // Mapar vår paymentList - för att få ut valen

   /* {
    paymentList.map((paymentList) => {
    }
} */

    return (

    <Form>
        <input
            name='gateway' 
            type='radio'
            value='test_gateway'
        />
        <label htmlFor="test_gateway">Test Gateway</label>
        <input
            name='gateway' 
            type='radio'
            value='stripe'
        />
        <label htmlFor="stripe">Credit Card</label>
        <input
            name='gateway' 
            type='radio'
            value='stripe'
        />
        <label htmlFor="stripe">Credit Card</label>
</Form>
    )

    // Providern..

  return (
        <PaymentContext.Provider 
        value={{}}>
            {props.children}
        </PaymentContext.Provider>

    ) 
}

export default OptionPayment