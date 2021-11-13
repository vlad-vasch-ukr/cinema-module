import React from "react";
import AuthForm from "../../components/AuthForm/AuthForm";
import { Container } from "@mui/material";
import * as Yup from 'yup';
import { isAfter, isBefore } from "date-fns";
import { useTranslation } from 'react-i18next';
import './Registration.scss';

const Registration: React.FC = () => {
  const { t } = useTranslation();

  const rules = Yup.object().shape({
    firstName: Yup.string().required(t('rules.required')),
    lastName: Yup.string().required(t('rules.required')),
    sex: Yup.string().required(t('rules.required')),
    email: Yup.string().required(t('rules.required')).email(t('rules.email')),
    password: Yup.string().required(t('rules.required')).min(8, t('rules.minLen') + 8),
    confirmPassword: Yup.string().required(t('rules.required')).oneOf([Yup.ref('password'), null], t('rules.confirmPassword')),
    userName: Yup.string().required(t('rules.required')).test('', t('rules.latin'), (val:string | undefined):boolean => {
      if (val) {
        const valueArr:Array<string> = val.split('');
        return valueArr[0] === valueArr[0].toLowerCase() && /^[a-zA-Z]+$/.test(valueArr[0]) && /^[a-zA-Z0-9._]+$/.test(valueArr[valueArr.length - 1])
      } else return false
    }),
    dateOfBirth: Yup.string().required(t('rules.required')).test('', t('rules.date'), (val:string | undefined):boolean => {
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
    { type: 'text', name: 'firstName', label: t('registrationPage.labelFirst') },
    { type: 'text', name: 'lastName', label: t('registrationPage.labelLast') },
    { type: 'text', name: 'userName', label: t('registrationPage.labelUser') },
    { type: 'email', name: 'email', label: t('registrationPage.labelEmail') },
    { type: 'date', name: 'dateOfBirth', label: '' },
    { type: 'select', name: 'sex', label: t('registrationPage.labelSex') },
    { type: 'password', name: 'password', label: t('registrationPage.labelPassword') },
    { type: 'password', name: 'confirmPassword', label: t('registrationPage.labelConfirm') },
  ]

  return (
    <div className="registration-view">
      <Container maxWidth='lg'>
        <div className="registration-view__wrap">
          <AuthForm
            rules={rules}
            fieldsTemplate={fieldsTemplate}
            title={t('registrationPage.title')}
            path='/sign-up'
            pathName={t('registrationPage.pathName')}
            handler={submitForm}
            submitBtn={t('registrationPage.submit')}
          />
        </div>
      </Container>
    </div>
  )
}

export default Registration