import React from "react";
import MainCard from "../Components/Auth/Card";
import SignInForm from "../Components/Auth/SignInForm";

function SignIn() {
  return (
    <MainCard variant="SignIn">
      <SignInForm />
    </MainCard>
  );
}

export default SignIn;
