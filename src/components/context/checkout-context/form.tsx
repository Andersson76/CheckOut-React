import { FC } from 'react';
import { Grid } from '@mui/material';
import { TextField } from 'formik-mui';
import { Formik, Field, FormikErrors, FormikTouched} from 'formik';


interface Props {}

export interface FormData {
  firstname: string,
  lastname: string,
  address: string,
  zipcode: number,
  city: string,
  country: string,
  email: string,
  phone: number
}

export const DefaultFormList: FormData = {
  firstname: "",
  lastname: "",
  address: "",
  zipcode: 0,
  city: "",
  country: "",
  email: "",
  phone: 0
}

export interface FormProps  {
  formName: string
}


const Form: React.FC<{}> = () => {

  const initialValues: FormProps = { formName: '' };

  return (
    <Formik
    initialValues={initialValues}
    onSubmit={(values, actions) => {
      console.log({ values, actions });
      alert(JSON.stringify(values, null, 2));
      actions.setSubmitting(false);
    }}
  >

<>
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <Field
          component={TextField}
          label="Förnamn"
          name="firstname"
        /*   name={`${}.firstname`} */
          variant="outlined"
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Field
          component={TextField}
          label="Efternamn"
          name="lastname"
          variant="outlined"
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
        <Field
          component={TextField}
          label="Adress"
          name="address"
          variant="outlined"
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Field
          component={TextField}
          label="Postnummer"
          name="zipcode"
          variant="outlined"
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Field
          component={TextField}
          label="Stad"
          name="city"
          variant="outlined"
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Field
          component={TextField}
          label="Land"
          name="country"
          variant="outlined"
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
        <Field
          component={TextField}
          label="Mejl"
          name="email"
          variant="outlined"
          fullWidth
        />
      </Grid> 
      <Grid item xs={12}>
           <Field
             component={TextField}
             label="Telefonnummer"
             name="phone"
             variant="outlined"
             fullWidth
           />
         </Grid> 
    </Grid>
    </>
    </Formik>
  );
};

export default Form