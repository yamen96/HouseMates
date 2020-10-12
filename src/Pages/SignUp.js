import React from "react";
import MainCard from "../Components/Auth/Card";
import SignUpForm from "../Components/Auth/SignUpForm";

function SignUp() {
  return (
    <MainCard variant="SignUp">
      <SignUpForm />
    </MainCard>
  );
}

export default SignUp;
