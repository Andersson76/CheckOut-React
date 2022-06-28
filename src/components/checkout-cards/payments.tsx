import { FC, useContext } from "react" 
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import { PaymentContext } from "../context/payment-provider"
import FormLabel from '@mui/material/FormLabel'
import { smallImageStyle } from "../../css/common"
import { paymentList } from "../../data/paymentList"
import DefaultPaymentCard from "../checkout-cards/payment-card"
import DefaultPaymentSwish from "../checkout-cards/payment-swish"
import DefaultPaymentResurs from "../checkout-cards/payment-resurs"


interface Props {}


const  PaymentOptionCard: FC<Props> = (props) => {

    
    const { paymentOptionState, setPaymentOption } = useContext(PaymentContext)
   
    return (

        <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Betalsätt</FormLabel>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female" 
                    name="radio-buttons-group"
                >
                <>
                 {paymentList.map((paymentOption) => {
                    return (
                    <>
                        <tr key={paymentOption.id}>
                    
                    <FormControlLabel 
                        value={paymentOption.id} control={<Radio />} label={paymentOption.title}
                        onChange={() => {setPaymentOption(paymentOption)}}
                    />
                      <img style={smallImageStyle} src={paymentOption.image}/>
                    
                    </tr>

                <div> 
                    { paymentOptionState && (paymentOption.id == paymentOptionState.id && paymentOptionState.id) == 1 ? <DefaultPaymentSwish/> : undefined } 
                    { paymentOptionState && (paymentOption.id == paymentOptionState.id && paymentOptionState.id) == 2 ? <DefaultPaymentCard/> : undefined } 
                    { paymentOptionState && (paymentOption.id == paymentOptionState.id && paymentOptionState.id) == 3 ? <DefaultPaymentResurs/> : undefined } 
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