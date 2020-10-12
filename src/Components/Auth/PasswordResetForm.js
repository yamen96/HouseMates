import React from "react";
import { useState } from "react";
import {
  Form,
  Input,
  Button,
  ErrorMessage,
  InfoMessage,
  SuccessMessage,
} from "./Card";
import useForm from "../../Hooks/useForm";
import validate from "../../Validation/PassResetFormValidation";
import { Link } from "react-router-dom";
import { auth } from "../../firebase";

function PasswordReset() {
  const [passResetMessage, setPassResetMessage] = useState({
    type: "",
    message: "",
  });

  const passReset = () => {
    console.log("SENT EMAIL");
    auth
      .sendPasswordResetEmail(inputs.email)
      .then(function () {
        setPassResetMessage({ type: "success", message: "Email Sent" });
      })
      .catch(function (error) {
        setPassResetMessage({ type: "error", message: error.message });
      });
  };

  const { inputs, handleInputChange, handleSubmit, errors } = useForm(
    passReset,
    validate
  );

  return (
    <Form>
      <InfoMessage>
        Enter your account email to receive a link allowing you to reset your
        password.
      </InfoMessage>
      <Input
        type="text"
        placeholder="Email"
        name="email"
        onChange={handleInputChange}
        value={inputs.email || ""}
      ></Input>
      {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
      <br />
      {passResetMessage.type === "error" && (
        <ErrorMessage style={{ padding: "5px" }}>
          {passResetMessage.message}
        </ErrorMessage>
      )}
      {passResetMessage.type === "success" && (
        <SuccessMessage>{passResetMessage.message}</SuccessMessage>
      )}
      <Button primary onClick={handleSubmit}>
        Send Request
      </Button>
      <Link style={{ width: "275px" }} to="signin">
        {"< Back"}
      </Link>
    </Form>
  );
}

export default PasswordReset;
