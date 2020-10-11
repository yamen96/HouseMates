import React from "react";
import { Form, Input, Submit, ErrorMessage } from "./Card";
import useForm from "../../Hooks/useForm";
import { Link } from "react-router-dom";
import validate from "../../Validation/SignInFormValidation";

function SignIn() {
  const signin = () => {
    console.log(inputs);
  };

  const { inputs, handleInputChange, handleSubmit, errors } = useForm(
    signin,
    validate
  );

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Email"
        name="email"
        onChange={handleInputChange}
        value={inputs.email || ""}
      ></Input>
      {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
      <Input
        type="password"
        placeholder="Password"
        name="pass"
        onChange={handleInputChange}
        value={inputs.pass || ""}
      ></Input>
      {errors.pass && <ErrorMessage>{errors.pass}</ErrorMessage>}
      <Submit type="submit" primary={true} value="Sign In"></Submit>
      <Link style={{ width: "275px" }} to="passwordReset">
        Forgot Password?
      </Link>
      <Submit
        type="submit"
        primary={false}
        value="Sign In with Google"
      ></Submit>
    </Form>
  );
}

export default SignIn;
