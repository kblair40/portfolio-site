import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import { Formik, Form, Field } from "formik";
import { Button, LinearProgress } from "@material-ui/core";
import { TextField } from "formik-material-ui";
import PageContainer from "./PageContainer";

const styles = {
  ContactForm: {
    marginTop: "5rem",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
  },
};

interface Values {
  email: string;
  password: string;
}

function ContactForm(props) {
  const { classes } = props;
  return (
    // <PageContainer>
    <div className={classes.ContactForm}>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validate={(values) => {
          const errors: Partial<Values> = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            setSubmitting(false);
            alert(JSON.stringify(values, null, 2));
          }, 500);
        }}
      >
        {({ submitForm, isSubmitting }) => (
          <Form>
            <Field
              component={TextField}
              name="email"
              type="email"
              label="Email"
            />
            <br />
            <Field
              component={TextField}
              type="password"
              label="Password"
              name="password"
            />
            {isSubmitting && <LinearProgress />}
            <br />
            <Button
              variant="outlined"
              color="primary"
              style={{ marginTop: "1rem" }}
              disabled={isSubmitting}
              onClick={submitForm}
            >
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </div>
    // </PageContainer>
  );
}

export default withStyles(styles)(ContactForm);
