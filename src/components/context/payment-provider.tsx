import { FC, useState, PropsWithChildren } from "react"
import { Payment } from "../../data/paymentList"
import React from "react"    
import { PaymentCardData } from "../checkout-logic/payment-card"

interface Props{}

export interface OptionPaymentData {
  paymentOptionState: Payment | undefined,
  setPaymentOption: React.Dispatch<React.SetStateAction<Payment | undefined>> 
/*   setCardState: React.Dispatch<React.SetStateAction<PaymentCardData | undefined>> 
  setResursState: React.Dispatch<React.SetStateAction<PaymentResurs | undefined>> 
  setSwishState: React.Dispatch<React.SetStateAction<PaymentSwish | undefined>>  */
}

const DefaultOptionPaymentData: OptionPaymentData = {
  paymentOptionState: undefined,
  setPaymentOption: () => {},
/*   setCardState: () => {},
  setResursState: () => {},
  setSwishState: () => {}, */
}


export const PaymentContext = React.createContext<OptionPaymentData>(DefaultOptionPaymentData)


const PaymentProvider: FC<PropsWithChildren<Props>> = (props) => {

    const [paymentOptionState, setPaymentOption] = useState<Payment | undefined>()
/*     const [cardState, setCardState] = useState<PaymentCardData | undefined>()
    const [resursState, setResursState] = useState<PaymentResurs | undefined>()
    const [swishState, setSwishState] = useState<PaymentSwish | undefined>() */


    return (
        <PaymentContext.Provider 
            value={{paymentOptionState, setPaymentOption,/*  setCardState, setResursState, setSwishState */}}> 
                {props.children}
        </PaymentContext.Provider>

    ) 
}
  

export default PaymentProvider