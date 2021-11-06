import React from 'react';
import { Card, CardContent, Typography, TextField, Box, Button, MenuItem } from '@mui/material';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link } from 'react-router-dom';
import { blue } from '@mui/material/colors';
import { useState } from 'react';
import FieldError from '../FieldError/FieldError';


export interface Field {
  type: string,
  name: string,
  label: string
}

export interface Auth {
  title: string,
  path: string,
  pathName: string,
  fieldsTemplate: Field[],
  rules: any,
  handler: Function,
  submitBtn: string
}

const linkStyle = {
  color: blue[500],
  textDecoration: 'none',
  fontSize: '16px'
}

const AuthForm: React.FC<Auth> = ({ title,  path, pathName, rules, fieldsTemplate, handler, submitBtn }) => {
  const [select, setSelect] = useState<string>('')

  const {register, handleSubmit, getValues, reset, formState: {errors}} = useForm({
    mode: 'onChange',
    resolver: yupResolver(rules)
  });

  const submitForm = ():void => {
    handler.bind(null, getValues())();
    reset();
    setSelect('');
  }

  return (
    <Card sx={{ maxWidth: 500, width: '100%', padding: '15px' }}>
      <Typography align='center' component='p' variant='h4'>
        { title }
      </Typography>
      <CardContent>
      <form noValidate onSubmit={ handleSubmit( submitForm ) }>
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
                </Box>)
              }
            })
          }
          <Button
            type='submit'
            variant='contained'
            size='large'
          >
            { submitBtn }
          </Button>
        </form>
        <Typography component='div' mt={2}>
          <Link to={ path } style={ linkStyle } >
            { pathName }
          </Link>
        </Typography>
      </CardContent>
    </Card>
  )
}

export default AuthForm