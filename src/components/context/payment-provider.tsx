import { FC, useState, PropsWithChildren } from "react"
import { Payment } from "../../data/paymentList"
import React from "react"    


interface Props{}

export interface OptionPaymentData {
  paymentOptionState: Payment | undefined,
  setPaymentOption: React.Dispatch<React.SetStateAction<Payment | undefined>> 
}

const DefaultOptionPaymentData: OptionPaymentData = {
  paymentOptionState: undefined,
  setPaymentOption: () => {}  
}


export const PaymentContext = React.createContext<OptionPaymentData>(DefaultOptionPaymentData)


const PaymentProvider: FC<PropsWithChildren<Props>> = (props) => {

    const [paymentOptionState, setPaymentOption] = useState<Payment | undefined>()

   
    return (
        <PaymentContext.Provider 
            value={{paymentOptionState, setPaymentOption}}> 
                {props.children}
        </PaymentContext.Provider>

    ) 
}
  
    

export default PaymentProvider