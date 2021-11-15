import React from 'react';
import AuthHeader from '../components/AuthHeader/AuthHeader';

const AuthLayout:React.FC = ({children}) => {
  return(
    <div className="auth-layuot">
      <AuthHeader />
      {children}
    </div>
  )
}

export default AuthLayout