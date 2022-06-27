import { FC, PropsWithChildren, useEffect, useState } from "react" 
import { Shipping, shippingList } from "../../../data/shippingList"
import React from "react"   
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import { smallImageStyle } from "../../../css/common"

interface Props {}


export interface ShippingData {
    shippingState: Shipping | undefined
    setShippingState: React.Dispatch<React.SetStateAction<Shipping | undefined>> 
}

const DefaultShippingData: ShippingData = {
    shippingState: undefined,  
    setShippingState: () => {}  
}


export const ShippingContext = React.createContext<ShippingData>(DefaultShippingData)


const ShippingProvider: FC<PropsWithChildren<Props>> = (props) => {

    const [shippingState, setShippingState] = useState<Shipping | undefined>()/* ([]) */


        const getShippingDate = (shippingOption: number | undefined) => {
           
            let actualDate: Date = new Date()
            actualDate = new Date(new Date().setHours(new Date().getHours() + shippingOption!))
            let newShippingDate = actualDate.toLocaleDateString()
                
            return newShippingDate

        }

    return (

        <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Fraktsätt</FormLabel>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female" 
                    name="radio-buttons-group"
                >

                <>

                 {shippingList.map((shippingOption) => {
                    return (
                
                    <>
                    <tr key={shippingOption.id}>
                
                    <FormControlLabel 
                        value={shippingOption.id} control={<Radio />} label={shippingOption.title}
                            onChange={() => 
                                {setShippingState(shippingOption)}} 
                            />
                        
                        <img style={smallImageStyle} src={shippingOption.image}/>
                        <p>{shippingOption.price} kr</p>

                        <p>{shippingState && (shippingState.id == shippingOption.id)?
                            <p>Beräknad leverans: {getShippingDate(shippingOption.shippingDate)}</p> : undefined
                            }</p>

                    </tr>

                    </>
                )
            })
        }
        </>    
            </RadioGroup>
        </FormControl>
    )

}

/* 
          return (
            <ShippingContext.Provider 
                 value={{shippingState, setShippingState}}> 
                    {props.children}
            </ShippingContext.Provider>
            )
 */


export default ShippingProvider


