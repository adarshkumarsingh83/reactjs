const required = value => (value ? undefined : "Required Field");

const minLength = min => value =>
  value && value < min ? `Must be at least ${min}` : undefined;
const minLengthValue = minLength(2);

const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined;
const maxLengthValue = maxLength(15);

export default { required, minLengthValue, maxLengthValue };
