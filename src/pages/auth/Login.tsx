import React from 'react';
import styled from 'styled-components';
import LoginForm from './LoginForm';
import SocialLogin from './SocialLogin';

const Login = () => {
  return (
    <Container>
      <LoginForm />
      <SocialLogin />
    </Container>
  );
};

// 스타일드 컴포넌트 정의

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f0f0f0;
  padding: 20px;
`;

export default Login;
