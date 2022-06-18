import { FC, CSSProperties, useContext, useState } from "react"
import { Payment } from "../../../data/paymentList"
import { Grid, Button } from '@mui/material'
import { TextField } from 'formik-mui'
import { Formik, Field, Form} from 'formik'
import * as Yup from 'yup'
import {styleBtn} from "../../../css/common"
import FormLabel from '@mui/material/FormLabel'


interface Props {}

export interface PaymentResurs {
  socialSecurityNumber: number
  }
  
  export const DefaultPaymentResurs: PaymentResurs = {
    socialSecurityNumber: 0
  }
  
  const PaymentSchema = Yup.object().shape({
      socialSecurityNumber: Yup.number()
         .min(10, 'Vänligen fyll i fältet')
         .max(10, 'Vänligen fyll i fältet')
         .required('Vänligen fyll i fältet'),
     })


const PaymentResurs: FC<Props> = (props) => {

    const [paymentResursState, setPaymentResursState] = useState()

    return (
    
<Formik
    initialValues = {{
      socialSecurityNumber: "",
     }}


    validationSchema={PaymentSchema}
    onSubmit={(values, actions) => {
      alert(JSON.stringify(values, null, 2))
      actions.setSubmitting(false)
    }}
    >

{({ errors, touched }) => (
    <Form>
      <FormLabel id="demo-radio-buttons-group-label">Resurs Bank</FormLabel>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Field
            component={TextField}
            name='Personnummer'
            type='number' 
            label='Personnummer' 
            placeholder='000000-0000'
            fullWidth
            {...errors.socialSecurityNumber && touched.socialSecurityNumber ? (
              <div>{errors.socialSecurityNumber}</div>
              ) : null}
          />
        </Grid>
      </Grid>
    </Form>             
)}

</Formik>

    )
}

export default PaymentResurs
