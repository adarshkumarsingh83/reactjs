import React from "react";
import { Field, reduxForm } from "redux-form";
import renderField from "./RenderFields";
import formSubmit from "./FormSubmit";
import validate from "./Validate";

const LoginForm = ({ error, handleSubmit, pristine, reset, submitting }) => {
  //const { error, handleSubmit, pristine, reset, submitting } = props;
  const { required, minLengthValue, maxLengthValue } = validate;
  return (
    <form onSubmit={handleSubmit(formSubmit)}>
      <Field
        name="username"
        type="text"
        component={renderField}
        label="Username"
        validate={[required, minLengthValue, maxLengthValue]}
      />
      <br />
      <Field
        name="password"
        type="password"
        component={renderField}
        label="Password"
        validate={[required, minLengthValue, maxLengthValue]}
      />
      {error && <strong>{error}</strong>}
      <br />
      <div>
        <button type="submit" disabled={pristine || submitting}>
          Submit
        </button>
        &nbsp;&nbsp;
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
  );
};

let createReduxForm = reduxForm({
  form: "LoginForm"
});
export default createReduxForm(LoginForm);
