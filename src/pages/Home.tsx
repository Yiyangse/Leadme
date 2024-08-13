import React from 'react';
import styled from 'styled-components';
import ButtonList from '../components/ButtonList';

const Home: React.FC = () => {
  return (
    <Container>
      <Title>💭오늘 하루 어떠셨나요?</Title>
      
      <Text>
      나를 위한 시간하루 10분,
    </Text>     
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
  font-size: 5em;
  color: white;
  margin-bottom: 20px;
`;

const Text = styled.h2`
  font-size: 2em;
  color: white;
  margin-bottom: 20px;
`;

export default Home;
