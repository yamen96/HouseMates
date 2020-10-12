import React from "react";
import MainCard from "../Components/Auth/Card";
import PasswordResetForm from "../Components/Auth/PasswordResetForm";

function PasswordReset() {
  return (
    <MainCard variant="other" title="Reset your Password">
      <PasswordResetForm />
    </MainCard>
  );
}

export default PasswordReset;
