// src/pages/Todo.tsx
import React from 'react';
import styled from 'styled-components';
import '../index.css';

const Todo: React.FC = () => {
  return (
    <Container>
      <Title>오늘은 어떤 주제로 글을 써볼까요?</Title>
      <Text>오늘의 카드를 선택해보세요.</Text>
      <CardGrid>
        {Array.from({ length: 12 }).map((_, index) => (
          <Card key={index}>
            <CardInner>
              <CardFront>
                <p>메모지 {index + 1}</p>
              </CardFront>
              <CardBack>
                <p><Image src={`https://picsum.photos/150/150?random=${index}`} alt="Random" />
                </p>
              </CardBack>
            </CardInner>
          </Card>
        ))}
      </CardGrid>
    </Container>
  );
};

// 스타일링을 위한 컴포넌트

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #ffffff;
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

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 20px;
`;

const Card = styled.div`
  width: 150px;
  height: 150px;
  perspective: 1000px;
`;

const CardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 1s;
  transform-style: preserve-3d;

  ${Card}:hover & {
    transform: rotateY(180deg);
  }
`;

const CardFace = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const CardFront = styled(CardFace)`
  background-color: #f8f8f8;
`;

const CardBack = styled(CardFace)`
  background-color: #1f9ba1;
  color: white;
  transform: rotateY(180deg);
  flex-direction: column;
`;

const Image = styled.img`
  width: 100%;
  height: 70%;
  object-fit: cover;
  border-radius: 10px;
  margin-top: 30px;
  margin-bottom: 15px;
`;

export default Todo;
