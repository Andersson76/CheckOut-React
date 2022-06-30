import { useContext } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup'
import { CartContext } from '../context/cart-provider';
import { Grid, Button } from '@mui/material'
import { TextField } from 'formik-mui'
import { styleBtn } from "../../css/common"

export interface Swish {
    phone: string
}

export const DefaultSwish: Swish = {
    phone: ""
}

const SwishSchema = Yup.object().shape({
    phone: Yup.string()
      .min(10, 'Telefonnumret måste innehålla 10 nummer')
      .max(10, 'Telefonnumret måste innehålla 10 nummer') 
      .required('Vänligen fyll i fältet')
      .test((phone => String(phone).length <= 10)) 
      ,
  })

  
const Swish = () => {

    const {setSwish} = useContext(CartContext)

    return (
    <div>
    
      <Formik
        initialValues={{
            phone: '',
        }}

        validationSchema={SwishSchema}
        onSubmit={values => {
            setSwish(values as Swish)
        }}
      >

        {({ errors, touched }) => (
             <>
            <Form>
            <Grid>
             <Grid item xs={12} sm={6}>
             <Field
               component={TextField}
               label="Telefonnummer*"
               name="phone"
               variant="outlined"
               placeholder='070XXXXXXX'
               fullWidth
               {...errors.phone && touched.phone ? (
                <div>{errors.phone}</div>
                ) : null}
             />
           </Grid> 
           </Grid>
           <Button style={{...styleBtn, marginTop: "50px"}} type="submit" variant="contained">
            Spara
            </Button>
           </Form>
           </>
        )}
      </Formik>
    </div>
  )
}

export default Swish