import { FC, useContext } from "react" 
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import { PaymentContext } from "../context/payment-provider"
import { smallImageStyle } from "../../css/common"
import { paymentList } from "../../data/paymentList"
import DefaultPaymentCard from "./payment-card"

import DefaultSwish from "./swish"
import DefaultResurs from "./resurs"


interface Props {}


const  PaymentOptionCard: FC<Props> = (props) => {
    
    const { paymentOptionState, setPaymentOption } = useContext(PaymentContext)
   
    return (

        <FormControl>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female" // Hitta ett sätt att inte kunna gå vidare på om inget är valt
                    name="radio-buttons-group"
                >
                <>
                 {paymentList.map((paymentOption) => {
                    return (
                    <>
                        <tr key={paymentOption.id}>
                    
                    <FormControlLabel 
                        value={paymentOption.id} control={<Radio />} label={paymentOption.title}
                        onChange={() => 
                            {setPaymentOption(paymentOption)}}
                    />
                {/*       <img style={smallImageStyle} src={paymentOption.image}/> */}
                    
                    </tr>

                    <div> 
                        { paymentOptionState && (paymentOption.id == paymentOptionState.id && paymentOptionState.id) == 1 ? 
                            <DefaultSwish/> : undefined } 
                        { paymentOptionState && (paymentOption.id == paymentOptionState.id && paymentOptionState.id) == 2 ?
                            <DefaultPaymentCard/> : undefined } 
                        { paymentOptionState && (paymentOption.id == paymentOptionState.id && paymentOptionState.id) == 3 ?
                            <DefaultResurs/> : undefined } 
                    </div>

                </>
                )
            })
        }
        
                </>
            </RadioGroup>
        </FormControl>

    )
}

export default PaymentOptionCard