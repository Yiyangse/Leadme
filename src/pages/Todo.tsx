// Todo.tsx
import React from 'react';
import styled from 'styled-components';

const Todo: React.FC = () => {
  return (
    <Container>
      <Title>하루 랜덤 미션으로</Title>
      <Text>성취감 가져보기</Text>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #FFFF;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2em;
  color: #1f9ba1;
  margin-bottom: 20px;
`;

const Text = styled.h1`
  font-size: 1em;
  color: #1f9ba1;
  margin-bottom: 20px;
`;


export default Todo;
