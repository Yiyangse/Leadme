import React from 'react';
import styled from 'styled-components';

const Main: React.FC = () => {
  return (
    <Container>
      <Title>Main Page</Title>
      <div><Content>메인 페이지 내용</Content>
        </div>
    </Container>
  );
};

const Container = styled.div`
  text-align: center;
  margin: 20px;
`;

const Title = styled.h1`
  font-size: 2.5em;
  color: #ff4500;
`;

const Content = styled.h2`
  font-size: 1.5em;
  color: #ff4500;
`;

export default Main;
