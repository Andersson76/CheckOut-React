import { useContext } from 'react'
import { Grid, Button } from '@mui/material'
import { TextField } from 'formik-mui'
import { Formik, Field, Form} from 'formik'
import * as Yup from 'yup'
import { styleBtn } from "../../css/common"
import { CartContext } from '../context/cart-provider'


export interface PaymentCardData {
    cardnumber: string,
    fullname: string,
    month: string,
    year: string,
    CVC: string,
  }

  export const DefaultPaymentCard: PaymentCardData = {
    cardnumber: "",
    fullname: "",
    month: "",
    year: "",
    CVC: ""
  }

  const FormSchema = Yup.object().shape({
    cardnumber: Yup.string()
      .min(16, "Vänligen fyll i fältet")
      .max(16, "Vänligen fyll i fältet")
      .required("Vänligen fyll i fältet"),
      fullname: Yup.string()
      .min(2, "Vänligen fyll i fältet")
      .max(50, "Vänligen fyll i fältet")
      .required("Vänligen fyll i fältet"),
     month: Yup.string()
      .min(2, 'Vänligen fyll i fältet')
      .max(2, 'Vänligen fyll i fältet')
      .required('Required'),
    year: Yup.string()
      .min(2, 'Vänligen fyll i fältet')
      .max(2, 'Vänligen fyll i fältet')
      .required('Vänligen fyll i fältet'),
     CVC: Yup.string()
      .min(3, 'Vänligen fyll i fältet')
      .max(3, 'Vänligen fyll i fältet')
      .required('Vänligen fyll i fältet'),
  })


export const PaymentCard = () => {

    const { setCardState } = useContext(CartContext) 
  
      return (
      
    <Formik
        initialValues = {{
         cardnumber: '', 
         fullname: '', 
         month: '', 
         year: '', 
         CVC: '',
       }}
  
      validationSchema={FormSchema}
      onSubmit={values => { 
        setCardState(values as PaymentCardData)      
      }}
  
    >


{({ errors, touched }) => (
  <>
  <Form>
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Field
          component={TextField}
          label="Förnamn*"
          name="firstname"
          variant="outlined"
          fullWidth
          {...errors.cardnumber && touched.cardnumber ? (
          <div>{errors.cardnumber}</div>
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


/* export default CustomerForm */