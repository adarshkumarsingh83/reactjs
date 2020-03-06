const validate = values => {
  const errors = {};

  if (!values.username) {
    errors.username = "UserName Required";
  }

  if (!values.password) {
    errors.password = "Pwd Required";
  }
  return errors;
};

export default validate;
