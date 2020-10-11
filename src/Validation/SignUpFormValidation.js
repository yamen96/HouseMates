export default function validate(values) {
    let errors = {};

    if(!values.username) {
        errors.username = "Username is required";
    }

    if (!values.email) {
        errors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Email address is invalid';
    }

    if(!values.pass){
        errors.pass = "Password is required";
    } else if (values.pass.length <= 6 ) {
        errors.pass = "Password is shorter than 8 characters";
    } else if (!/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/.test(values.pass)){
        errors.pass = "Password must contain a special character";
    }

    if(!values.pass2){
        errors.pass2 = "Please re-type your password";
    } else if(values.pass !== values.pass2){
        errors.pass2 = "Password does not match"
    }

    return errors;
}