import { FC, useState } from "react"
import { Grid, Button } from '@mui/material'
import { TextField } from 'formik-mui'
import { Formik, Field, Form} from 'formik'
import * as Yup from 'yup'
import FormLabel from '@mui/material/FormLabel'
import {styleBtn} from "../../css/common"


interface Props {}

export interface PaymentCardData {
    cardnumber: string,
    fullname: string,
    month: string,
    year: string,
    CVC: string
  }
  
  export const DefaultPaymentCard: PaymentCardData = {
    cardnumber: "",
    fullname: "",
    month: "",
    year: "",
    CVC: ""
  }
  
  const PaymentSchema = Yup.object().shape({
       cardnumber: Yup.number()
         .min(16, 'Vänligen fyll i fältet')
         .max(16, 'Vänligen fyll i fältet')
         .required('Vänligen fyll i fältet'),
       fullname: Yup.string()
         .min(2, 'Vänligen fyll i fältet')
         .max(50, 'Vänligen fyll i fältet')
         .required('Vänligen fyll i fältet'),
        month: Yup.number()
         .min(2, 'Vänligen fyll i fältet')
         .max(2, 'Vänligen fyll i fältet')
         .required('Required'),
       year: Yup.number()
         .min(2, 'Vänligen fyll i fältet')
         .max(2, 'Vänligen fyll i fältet')
         .required('Vänligen fyll i fältet'),
        CVC: Yup.number()
         .min(3, 'Vänligen fyll i fältet')
         .max(3, 'Vänligen fyll i fältet')
         .required('Vänligen fyll i fältet'),
     })



const PaymentCard: FC<Props> = (props) => {

    const [cardState, setCardState] = useState<PaymentCardData | undefined>()

    return (
    
<Formik
    initialValues = {{
       cardnumber: '', 
       fullname: '', 
       month: '', 
       year: '', 
       CVC: ''
     }}

    validationSchema={PaymentSchema}
    onSubmit={values => { 
      setCardState(values as PaymentCardData)      
    }}
    >

{({ errors, touched }) => (   
  <Form>
    <FormLabel id="demo-radio-buttons-group-label">Kortbetalning</FormLabel>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Field
            component={TextField}
            name='Kortnummer'
            type='number' 
            label='Kortnummer' 
            placeholder='1234567890123456'
            fullWidth
            {...errors.cardnumber && touched.cardnumber ? (
              <div>{errors.cardnumber}</div>
              ) : null}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Field
            component={TextField}
            name='Giltighetsdatum' 
            fluid 
            options= 'monthOption' 
            label='Månad' 
            placeholder='MM'
            fullWidth
            {...errors.month && touched.month ? (
              <div>{errors.month}</div>
              ) : null}
          />
        </Grid>
        <Grid item xs={12}sm={6}>
          <Field
            component={TextField}
            name='Giltighetsdatum' 
            fluid 
            options='yearOptions' 
            label='År' 
            placeholder='ÅR'
            fullWidth
            {...errors.year && touched.year ? (
              <div>{errors.year}</div>
              ) : null}
          />
          </Grid>
        <Grid item xs={12} sm={6}>
          <Field
            component={TextField}
            name='cvc'
            type='number'
            label='CVC' 
            placeholder='123'
            fullWidth
            {...errors.CVC && touched.CVC ? (
              <div>{errors.CVC}</div>
              ) : null}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Field
            component={TextField}
            name='Korthavare'
            label='Korthavare' 
            placeholder='Förnamn och Efternamn'
            fullWidth
            {...errors.fullname && touched.fullname ? (
              <div>{errors.fullname}</div>
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

    )
}

export default PaymentCard


