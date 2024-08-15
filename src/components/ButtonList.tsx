import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const ButtonList: React.FC = () => {
  const navigate = useNavigate();

  return (
    <ButtonContainer>
      <Button onClick={() => navigate('/home')}>Home</Button>
      <Button onClick={() => navigate('/todo')}>Todo</Button>
      <Button onClick={() => navigate('/login')}>로그인</Button>
    </ButtonContainer>
  );
};

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 1em;
  cursor: pointer;
  background-color: #1f9ba1;
  color: white;
  border: none;
  border-radius: 5px;

  &:hover {
    background-color: #1c8a90;
  }
`;

export default ButtonList;
