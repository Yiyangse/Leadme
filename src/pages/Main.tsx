// src/pages/Main.tsx
import React, { useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { addTodo } from '../store/actions'; // 액션 생성자 추가
import { RootState } from '../store/store'; // 루트 상태 타입 추가

interface MainProps {
  todos: { id: number; text: string; completed: boolean }[];
  addTodo: (text: string) => void; // addTodo 액션 생성자 추가
}

const Main: React.FC<MainProps> = ({ todos, addTodo }) => {
  const [inputValue, setInputValue] = useState('');

  const handleAddTodo = () => {
    if (inputValue.trim() === '') return;
    addTodo(inputValue);
    setInputValue('');
  };

  return (
    <Container>
      <Title>Main Page</Title>
      <Content>메인 페이지 내용</Content>
      <TodoContainer>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={handleAddTodo}>Add Todo</button>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>{todo.text}</li>
          ))}
        </ul>
      </TodoContainer>
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

const Content = styled.p`
  font-size: 1.5em;
  color: #ff4500;
`;

const TodoContainer = styled.div`
  margin-top: 20px;
  input {
    padding: 5px;
    margin-right: 10px;
  }
  button {
    padding: 5px 10px;
    background-color: #ff4500;
    color: white;
    border: none;
    cursor: pointer;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    margin-top: 10px;
  }
`;

// Redux store 연결
const mapStateToProps = (state: RootState) => ({
  todos: state.todos,
});

const mapDispatchToProps = {
  addTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
