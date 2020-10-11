export default function validate(values) {
    let errors = {};

    if(!values.email) {
        errors.email = "Email is required";
    }

    if(!values.pass){
        errors.pass = "Password is required";
    }

    return errors;
}