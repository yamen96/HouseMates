import React from "react";
import SignInOrUpCard from "../Components/Auth/Card";
import SignInForm from "../Components/Auth/SignInForm";

function SignIn() {
  return (
    <SignInOrUpCard variant="SignIn">
      <SignInForm />
    </SignInOrUpCard>
  );
}

export default SignIn;
