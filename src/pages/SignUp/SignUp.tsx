import React from "react";
import { Container, Box } from "@mui/material";
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import AuthForm from "../../components/AuthForm/AuthForm";

export interface Field {
  type: string,
  name: string,
  label: string
}

const SignUp: React.FC = () => {
  const fieldsTemplate:Field[] = [
    { type: 'email', name: 'email', label: 'Email*' },
    { type: 'password', name: 'password', label: 'Password*' },
  ]

  const rules = Yup.object().shape({
    email: Yup.string().required('Field is required').email('Email must be correct'),
    password: Yup.string().required('Field is required').min(8, 'Minimum length 8')
  })

  const submitForm = (form: any):void => {
    console.log(form)
  }

  return (
    <div className="signup-view">
      <Container maxWidth='lg'>
        <Box sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <AuthForm
            rules={rules}
            fieldsTemplate={fieldsTemplate}
            title='Sign Up'
            path='/registration'
            pathName='I have an account'
            handler={submitForm}
            submitBtn='sign up'
          />
        </Box>
      </Container>
    </div>
  )
}

export default SignUp
