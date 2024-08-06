// ButtonList.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const ButtonList: React.FC = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/todo');
  };

  return (
    <ButtonContainer>
      <StyledButton onClick={handleButtonClick}>마음의 안정을 찾고 싶어요</StyledButton>
      <StyledButton onClick={handleButtonClick}>오늘도 이룬 게 없는 것 같아요</StyledButton>
      <StyledButton onClick={handleButtonClick}>내가 자꾸만 미워져요</StyledButton>
      <StyledButton onClick={handleButtonClick}>가족이 불편해요</StyledButton>
    </ButtonContainer>
  );
};

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledButton = styled.button`
  background: white;
  border: none;
  padding: 15px 30px;
  margin: 10px 0;
  font-size: 1em;
  border-radius: 5px;
  cursor: pointer;
  width: 300px;
  text-align: left;

  &:hover {
    background: #f0f0f0;
  }

  &:after {
    content: '>';
    float: right;
    color: #ff6f61;
  }
`;

export default ButtonList;