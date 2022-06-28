import { FC, useState } from "react"
import { Grid, Button } from '@mui/material'
import { TextField } from 'formik-mui'
import { Formik, Field, Form} from 'formik'
import * as Yup from 'yup'
import FormLabel from '@mui/material/FormLabel'
import {styleBtn} from "../../css/common"


interface Props {}

export interface PaymentSwish {
    phone: string, 
  }
  
  export const DefaultPaymentSwish: PaymentSwish = {
    phone: "",
  }
  
  const PaymentSchema = Yup.object().shape({
       phonenumber: Yup.number()
         .min(10, 'Vänligen fyll i fältet')
         .max(10, 'Vänligen fyll i fältet')
         .required('Vänligen fyll i fältet'),
     })


export const PaymentSwish = () => {
/* const PaymentSwish: FC<Props> = (props) => { */

    const [swishState, setSwishState] = useState<PaymentSwish | undefined>()

    return (

<Formik
    initialValues = {{
       phone: "",
     }}


    validationSchema={PaymentSchema}
    onSubmit={values => { 
      setSwishState(values as PaymentSwish)
    }}
    >



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
        <Button style={{...styleBtn, marginTop: "50px"}} type="submit" variant="contained">
          Spara
        </Button>
      </Form>             
  </>

  )}

</Formik>

    )
}

export default PaymentSwish


