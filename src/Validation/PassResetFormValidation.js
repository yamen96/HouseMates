export default function validate(values) {
  let errors = {};

  if (!values.email) {
    errors.email = "Email is required";
  }

  return errors;
}
