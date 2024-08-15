import React from 'react';
import styled from 'styled-components';
import LoginForm from './LoginForm';
import SocialLogin from './SocialLogin';

const Login = () => {
  return (
    <Container>
      <Text>아래 방법들 중 선택하여 로그인을 할 수 있습니다.</Text>
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

const Text = styled.h1`
  font-size: 1em;
  color: #1f9ba1;
  margin-bottom: 20px;
`;
export default Login;
