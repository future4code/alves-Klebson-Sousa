import React from "react";
import { MainSignUp } from "./styled";
import SignUpForm from "./SignUpForm";
import useUntectedPage from "../../hooks/useUnprotectedPage";

const SignUpPage = () => {
  useUntectedPage()
  return (
    <MainSignUp>
      <div>
        <h1>Olá, boas vindas ao LabEddit</h1>
      </div>
      <SignUpForm />
    </MainSignUp>
  );
};
export default SignUpPage;
