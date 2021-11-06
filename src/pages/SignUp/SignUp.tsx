import React from "react";
import { Container } from "@mui/material";
import AuthForm from "../../components/AuthForm/AuthForm";

export interface Field {
  type: string,
  name: string,
  label: string
}

const SignUp: React.FC = () => {
  return (
    <div className="signup-view">
      <Container maxWidth='lg'>
        <AuthForm title='Sign Up' path='registration' pathName='Register'>

        </AuthForm>
      </Container>
    </div>
  )
}

export default SignUp
