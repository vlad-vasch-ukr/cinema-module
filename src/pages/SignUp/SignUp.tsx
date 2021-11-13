import React from "react";
import { Container } from "@mui/material";
import * as Yup from 'yup';
import AuthForm from "../../components/AuthForm/AuthForm";
import { useTranslation } from 'react-i18next';
import './SignUp.scss';

export interface Field {
  type: string,
  name: string,
  label: string
}

const SignUp: React.FC = () => {
  const { t } = useTranslation();
  const fieldsTemplate:Field[] = [
    { type: 'email', name: 'email', label: t('registrationPage.labelEmail') },
    { type: 'password', name: 'password', label: t('registrationPage.labelPassword') },
  ];

  const rules = Yup.object().shape({
    email: Yup.string().required(t('rules.required')).email(t('rules.email')),
    password: Yup.string().required(t('rules.required')).min(8, t('rules.minLen') + 8)
  });

  const submitForm = (form: any):void => {
    console.log(form)
  };

  return (
    <div className="signup-view">
      <Container maxWidth='lg'>
        <div className='signup-view__wrap'>
          <AuthForm
            rules={rules}
            fieldsTemplate={fieldsTemplate}
            title={t('signPage.title')}
            path='/registration'
            pathName={t('signPage.pathName')}
            handler={submitForm}
            submitBtn={t('signPage.submit')}
          />
        </div>
      </Container>
    </div>
  )
}

export default SignUp
