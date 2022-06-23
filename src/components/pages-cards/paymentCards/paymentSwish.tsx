import { FC, useState } from "react"
import { Payment } from "../../../data/paymentList"
import { Grid, Button } from '@mui/material'
import { TextField } from 'formik-mui'
import { Formik, Field, Form} from 'formik'
import * as Yup from 'yup'
import {styleBtn} from "../../../css/common"
import FormLabel from '@mui/material/FormLabel'


interface Props {}

export interface PaymentSwish {
    phonenumber: number,
  }
  
  export const DefaultPaymentSwish: PaymentSwish = {
    phonenumber: 0,
  }
  
  const PaymentSchema = Yup.object().shape({
       phonenumber: Yup.number()
         .min(10, 'Vänligen fyll i fältet')
         .max(10, 'Vänligen fyll i fältet')
         .required('Vänligen fyll i fältet'),
     })


const PaymentSwish: FC<Props> = (props) => {

    const [swishState, setSwishState] = useState<Payment>()

    return (

<Formik
    initialValues = {{
       phone: "",
     }}


    validationSchema={PaymentSchema}
    onSubmit={(values, actions) => { 
      alert(JSON.stringify(values, null, 2))
      actions.setSubmitting(false)
    }}
    >

      {/* paymentSwish */}

  {({ errors, touched }) => (
    <>
    <Form>
      <FormLabel id="demo-radio-buttons-group-label">Swish</FormLabel>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Field
              component={TextField}
              name='Mobilnummer'
              type='number' 
              label='Mobilnummer' 
              placeholder='+46'
              fullWidth
              {...errors.phone && touched.phone ? (
                <div>{errors.phone}</div>
                ) : null}
            />
          </Grid>
        </Grid>
      </Form>             
  </>

  )}

</Formik>

    )
}

export default PaymentSwish


