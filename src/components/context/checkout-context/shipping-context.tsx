import { FC, PropsWithChildren, useEffect, useState } from "react" 
import { Shipping, shippingList } from "../../../data/shippingList"
import React from "react"   
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import ShippingCard from "../../pages-cards/shippingCard"

interface Props {}


export interface ShippingData {
    shippingState: Shipping | undefined,   
    setShippingState: React.Dispatch<React.SetStateAction<Shipping | undefined>> 
}

const DefaultShippingData: ShippingData = {
    shippingState: undefined, 
    setShippingState: () => {}  
}


export const ShippingContext = React.createContext<ShippingData>(DefaultShippingData)


const ShippingProvider: FC<PropsWithChildren<Props>> = (props) => {

    const [shippingState, setShippingState] = useState<Shipping | undefined>()/* ([]) */


    /* const [countDateState, setDateState] = useState() 
    Skapa en funktion för korrekt leveranstid
    */
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
                        <tr key={shippingOption.id}>
                    <>
                    <FormControlLabel 
                        value={shippingOption.id} control={<Radio />} label={shippingOption.title}
                        onChange={() => {setShippingState(shippingState)}}
                    /> 
        
                        <p>{shippingOption.price} kr</p>
                      {/*   <p>{shippingOption.shippingDate}</p>  */}
                  {/*  {shippingOption.image}  */}
                  
                    </>
                    </tr>
                )
            })
        }
        </>
          
               
            </RadioGroup>
        </FormControl>

    )


          return (
            <ShippingContext.Provider 
                 value={{shippingState, setShippingState}}> 
                    {props.children}
            </ShippingContext.Provider>

    ) 
    
  }


export default ShippingProvider


