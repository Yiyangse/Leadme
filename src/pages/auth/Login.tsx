import React from 'react';
import LoginForm from './LoginForm';
import SocialLogin from './SocialLogin';

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-5">
      <h1 className="text-xl text-[#1f9ba1] mb-5">
        아래 방법들 중 선택하여 로그인을 할 수 있습니다.
      </h1>
      <LoginForm />
      <SocialLogin />
    </div>
  );
};

export default Login;
