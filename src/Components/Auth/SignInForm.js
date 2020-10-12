import React from "react";
import { useState } from "react";
import { Form, Input, Button, ErrorMessage } from "./Card";
import useForm from "../../Hooks/useForm";
import { Link } from "react-router-dom";
import validate from "../../Validation/SignInFormValidation";
import { auth } from "../../firebase";

function SignIn() {
  const [signInError, setSignInError] = useState("");
  const [formState, setFormState] = useState("");

  const signin = () => {
    setFormState("loading");
    auth
      .signInWithEmailAndPassword(inputs.email, inputs.pass)
      .then(setFormState(""))
      .catch(function (error) {
        setSignInError(error.message);
      });
  };

  const { inputs, handleInputChange, handleSubmit, errors } = useForm(
    signin,
    validate
  );

  return (
    <Form>
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
      <br />
      {signInError && (
        <ErrorMessage style={{ padding: "5px" }}>{signInError}</ErrorMessage>
      )}
      <Button primary onClick={handleSubmit}>
        {formState !== "loading" && <div>Sign In</div>}
        {formState === "loading" && <div>Loading</div>}
      </Button>
      <Link style={{ width: "275px" }} to="passwordReset">
        Forgot Password?
      </Link>
    </Form>
  );
}

export default SignIn;
