import React, { useState } from "react";
import AuthForm from "../../components/AuthForm/AuthForm";
import { Container, TextField, Box, Button, MenuItem } from "@mui/material";
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { isAfter, isBefore } from "date-fns";
import FieldError from "../../components/FieldError/FieldError";
import './Registration.scss';

export interface Form {
  firstName: string,
  lastName: string,
  sex: string,
  email: string,
  password: string,
  confirmPassword: string,
  userName: string
}

export interface Field {
  type: string,
  name: string,
  label: string
}

const Registration: React.FC = () => {

  const [select, setSelect] = useState<string>('')

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
  
  const {register, handleSubmit, getValues, formState: {errors}} = useForm({
    mode: 'onChange',
    resolver: yupResolver(rules)
  });
  

  const fieldsTemplate:Field[] = [
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
          <AuthForm title='Registration' path='sign-up' pathName='I am registered'>
            <form noValidate onSubmit={ handleSubmit( () => console.log(getValues()) ) }>
              {
                fieldsTemplate.map(field => {
                  if(field.type !== 'select') {
                    return (<Box component='div' mb={2} key={field.name}>
                              <TextField
                                type={field.type}
                                {...register(field.name as any)}
                                error={ !!errors[field.name]?.message }
                                label={field.label}
                                fullWidth
                              />
                              <FieldError message={ errors[field.name]?.message } />
                            </Box>)
                  } else {
                    return (
                      <Box component='div' mb={2} key={field.name}>
                        <TextField
                          {...register(field.name as any)}
                          variant='outlined'
                          label={field.label}
                          error={ !select && !!errors[field.name]?.message }
                          value={select}
                          select
                          fullWidth
                          onChange={(e) => setSelect(e.target.value)}
                        >
                          <MenuItem value='male'>Male</MenuItem>
                          <MenuItem value='female' selected>Female</MenuItem>
                        </TextField>
                        <FieldError message={ !select && errors[field.name]?.message } />
                      </Box>
                    )
                  }
                })
              }
              <Button
                type='submit'
                variant='contained'
                size='large'
              >
                registration
              </Button>
            </form>
          </AuthForm>
        </div>
      </Container>
    </div>
  )
}

export default Registration