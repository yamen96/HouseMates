import React from 'react';
import {Form, Input, Submit, ErrorMessage} from './Card';
import useForm from '../../Hooks/useForm';
import validate from '../../Validation/SignUpFormValidation';

function SignUp(){
    const signup = () => {
        console.log(inputs);
    }

    const {inputs, handleInputChange, handleSubmit, errors} = useForm(signup, validate);

    return(
        <Form onSubmit={handleSubmit}>
            <Input type="text" placeholder="Username" name="username" onChange={handleInputChange} value={inputs.username || ''}></Input>
            {errors.username && (<ErrorMessage>{errors.username}</ErrorMessage>)}
            <Input type="text" placeholder="Email" name="email" onChange={handleInputChange} value={inputs.email || ''}></Input>
            {errors.email && (<ErrorMessage>{errors.email}</ErrorMessage>)}
            <Input type="password" placeholder="Password" name="pass" onChange={handleInputChange} value={inputs.pass || ''}></Input>
            {errors.pass && (<ErrorMessage>{errors.pass}</ErrorMessage>)}
            <Input type="password" placeholder="Re-type Password" name="pass2" onChange={handleInputChange} value={inputs.pass2 || ''}></Input>
            {errors.pass2 && (<ErrorMessage>{errors.pass2}</ErrorMessage>)}
            <Submit type="submit" value="Sign Up"></Submit>
        </Form>
    )
} 

export default SignUp;