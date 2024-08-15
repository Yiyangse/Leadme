import React, { useState } from 'react';
import styled from 'styled-components';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('이메일:', email);
    console.log('비밀번호:', password);
    // 로그인 처리 로직 추가
  };

  return (
    <Form onSubmit={handleLogin}>
      <Input
        type="text"
        placeholder="아이디 또는 이메일을 입력해 주세요"
        value={email}
        onChange={handleEmailChange}
      />
      <Input
        type="password"
        placeholder="비밀번호를 입력해 주세요"
        value={password}
        onChange={handlePasswordChange}
      />
      <Button type="submit">로그인하기</Button>
    </Form>
  );
};

// 스타일드 컴포넌트 정의

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;
  max-width: 600px;
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 10px;
  font-size: 1.2em;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 1.2em;
  background-color: #1f9ba1;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
  margin-bottom: 20px;

  &:hover {
    background-color: #1c8a90;
  }
`;

export default LoginForm;
