import { useContext } from 'react'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import { CartContext } from '../context/cart-provider'
import { Grid, Button } from '@mui/material'
import { TextField } from 'formik-mui'
import { styleBtn } from "../../css/common"

export interface Resurs {
    socialSecurityNumber: string
}

export const DefaultResurs: Resurs = {
    socialSecurityNumber: ""
}

const SignupSchema = Yup.object().shape({
    socialSecurityNumber: Yup.string()
      .min(10, 'Personnumret måste innehålla 10 nummer')
      .max(10, 'Personnumret måste innehålla 10 nummer') 
      .required('Vänligen fyll i fältet')
      .test((socialSecurityNumber => String(socialSecurityNumber).length <= 10)),
  })


const Resurs = () => {

    const {setResurs} = useContext(CartContext)

    return (
    <div>
    
      <Formik
        initialValues={{
            socialSecurityNumber: '',
        }}

        validationSchema={SignupSchema}
        onSubmit={values => {
            setResurs(values as Resurs)
        }}
      >

        {({ errors, touched }) => (
             <>
            <Form>
            <Grid>
             <Grid item xs={12} sm={6}>
             <Field
               component={TextField}
               label="Personnummer*"
               name="socialSecurityNumber"
               variant="outlined"
               placeholder='XXXXXX-XXXX'
               fullWidth
               {...errors.socialSecurityNumber && touched.socialSecurityNumber ? (
                <div>{errors.socialSecurityNumber}</div>
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

export default Resurs