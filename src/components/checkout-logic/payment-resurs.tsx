import { FC, useState } from "react"
import { Grid, Button } from '@mui/material'
import { TextField } from 'formik-mui'
import { Formik, Field, Form} from 'formik'
import * as Yup from 'yup'
import FormLabel from '@mui/material/FormLabel'
import {styleBtn} from "../../css/common"


interface Props {}

export interface PaymentResurs {
  socialSecurityNumber: string
  }
  
  export const DefaultPaymentResurs: PaymentResurs = {
    socialSecurityNumber: ""
  }
  
  const PaymentSchema = Yup.object().shape({
      socialSecurityNumber: Yup.number()
         .min(10, 'Vänligen fyll i fältet')
         .max(10, 'Vänligen fyll i fältet')
         .required('Vänligen fyll i fältet'),
     })


const PaymentResurs: FC<Props> = (props) => {

    const [resursState, setResursState] = useState<PaymentResurs | undefined>()

    return (

<div>
    
<Formik
    initialValues = {{
      socialSecurityNumber: "",
     }}


    validationSchema={PaymentSchema}
      onSubmit={values => { 
        setResursState(values as PaymentResurs)
        console.log(values)
      /* alert(JSON.stringify(values, null, 2))
      actions.setSubmitting(false) */
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
      <Button style={{...styleBtn, marginTop: "50px"}} type="submit" variant="contained">
          Spara
        </Button>
    </Form>             
)}

</Formik>

</div>

    )
}

export default PaymentResurs


