import React from 'react';
import styled from 'styled-components';
import ButtonList from '../components/ButtonList';

const Home: React.FC = () => {
  return (
    <Container>
      <Title>💭오늘 하루 어떠셨나요?</Title>
      <br></br>
      <br></br>
      <Text>
      단단한 나를 만들어주는<br></br>
      가장 쉬운 방법
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
