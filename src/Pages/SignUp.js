import React from "react";
import SignInOrUpCard from "../Components/Auth/Card";
import SignUpForm from "../Components/Auth/SignUpForm";

function SignUp() {
  return (
    <SignInOrUpCard variant="SignUp">
      <SignUpForm />
    </SignInOrUpCard>
  );
}

export default SignUp;
