import React from "react";
import AuthForm from "../../components/AuthForm/AuthForm";
import { Container } from "@mui/material";
import * as Yup from 'yup';
import { isAfter, isBefore } from "date-fns";
import './Registration.scss';

const Registration: React.FC = () => {

  const rules = Yup.object().shape({
    firstName: Yup.string().required('Field is required'),
    lastName: Yup.string().required('Field is required'),
    sex: Yup.string().required('Field is required'),
    email: Yup.string().required('Field is required').email('Email must be correct'),
    password: Yup.string().required('Field is required').min(8, 'Minimum length 8'),
    confirmPassword: Yup.string().required('Field is required').oneOf([Yup.ref('password'), null], 'Password mismatch'),
    userName: Yup.string().required('Field is required').test('', 'Latin letters only', (val:string | undefined):boolean => {
      if (val) {
        const valueArr:Array<string> = val.split('');
        return valueArr[0] === valueArr[0].toLowerCase() && /^[a-zA-Z]+$/.test(valueArr[0]) && /^[a-zA-Z0-9._]+$/.test(valueArr[valueArr.length - 1])
      } else return false
    }),
    dateOfBirth: Yup.string().required('Field is required').test('', 'Please enter the correct date', (val:string | undefined):boolean => {
      if (val) {
        const past:boolean = isBefore(new Date(1850, 0, 0), new Date(val));
        const future:boolean = isAfter(new Date(val), new Date());
        return !(!past || future);
      }
      return false;
    })
  })

  const submitForm = (form: any):void => {
    console.log(form)
  }
  

  const fieldsTemplate = [
    { type: 'text', name: 'firstName', label: 'First name*' },
    { type: 'text', name: 'lastName', label: 'Last name*' },
    { type: 'text', name: 'userName', label: 'User name*' },
    { type: 'email', name: 'email', label: 'Email*' },
    { type: 'date', name: 'dateOfBirth', label: '' },
    { type: 'select', name: 'sex', label: 'Sex*' },
    { type: 'password', name: 'password', label: 'Password*' },
    { type: 'password', name: 'confirmPassword', label: 'Confirm password*' },
  ]

  return (
    <div className="registration-view">
      <Container maxWidth='lg'>
        <div className="registration-view__wrap">
          <AuthForm
            rules={rules}
            fieldsTemplate={fieldsTemplate}
            title='Registration'
            path='/sign-up'
            pathName='I am registered'
            handler={submitForm}
            submitBtn='registration'
          />
        </div>
      </Container>
    </div>
  )
}

export default Registration