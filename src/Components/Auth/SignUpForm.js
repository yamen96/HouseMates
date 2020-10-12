import React from "react";
import { useState } from "react";
import { Form, Input, Button, ErrorMessage } from "./Card";
import useForm from "../../Hooks/useForm";
import validate from "../../Validation/SignUpFormValidation";
import { auth } from "../../firebase";

function SignUp() {
  const [signUpError, setSignUpError] = useState("");

  const signup = () => {
    auth
      .createUserWithEmailAndPassword(inputs.email, inputs.pass)
      .catch(function (error) {
        setSignUpError(error.message);
      });
  };

  const { inputs, handleInputChange, handleSubmit, errors } = useForm(
    signup,
    validate
  );

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Display Name"
        name="name"
        onChange={handleInputChange}
        value={inputs.name || ""}
      ></Input>
      {errors.username && <ErrorMessage>{errors.username}</ErrorMessage>}
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
      <Input
        type="password"
        placeholder="Re-type Password"
        name="pass2"
        onChange={handleInputChange}
        value={inputs.pass2 || ""}
      ></Input>
      {errors.pass2 && <ErrorMessage>{errors.pass2}</ErrorMessage>}
      <br />
      {signUpError && (
        <ErrorMessage style={{ padding: "5px" }}>{signUpError}</ErrorMessage>
      )}
      <Button primary>Sign Up</Button>
    </Form>
  );
}

export default SignUp;
