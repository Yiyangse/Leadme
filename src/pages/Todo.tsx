import React from 'react';
import styled from 'styled-components';
import ButtonList from '../components/ButtonList';

const Todo: React.FC = () => {
  return (
    <Container>
      <Title>💭나를 힘들게 하는 마음 고민은 무엇인가요?</Title>
      <ButtonList />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color:  #1f9ba1;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2em;
  color: white;
  margin-bottom: 20px;
`;

export default Todo;
