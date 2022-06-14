import React, { FunctionComponent } from 'react';
import { Grid } from '@mui/material';
import { TextField } from 'formik-mui';
import { Field } from 'formik';

const Form: FunctionComponent = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <Field
          component={TextField}
          label="First Name"
          name="firstName"
          variant="outlined"
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Field
          component={TextField}
          label="Last Name"
          name="lastName"
          variant="outlined"
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
        <Field
          component={TextField}
          label="Address line 1"
          name="addressLine1"
          variant="outlined"
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
        <Field
          component={TextField}
          label="Address line 2"
          name="addressLine2"
          variant="outlined"
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Field
          component={TextField}
          label="Postal/Zip Code"
          name="postalZipCode"
          variant="outlined"
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Field
          component={TextField}
          label="City"
          name="city"
          variant="outlined"
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Field
          component={TextField}
          label="Province"
          name="province"
          variant="outlined"
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Field
          component={TextField}
          label="Country"
          name="country"
          variant="outlined"
          fullWidth
        />
      </Grid>
    </Grid>
  );
};

export default Form