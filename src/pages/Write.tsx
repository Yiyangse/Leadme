import React, { useState } from 'react';
import styled from 'styled-components';

// Write 컴포넌트 정의
const Write: React.FC = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [prompt, setPrompt] = useState('');
  const [chatHistory, setChatHistory] = useState<string[]>([]);
  const [userInput, setUserInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Title:', title);
    console.log('Content:', content);
  };

  const generatePrompt = () => {
    const prompts = [
      '행복한', '기쁜', '즐거운', '멋진', '빛나는', '희망적인', '긍정적인', '환상적인', '재미있는', '아름다운', 
'칭찬할 만한', '잘된', '탁월한', '유쾌한', '성공적인', '따뜻한', '정다운', '영광스러운', '참된', '소중한', 
'사랑스러운', '환영받는', '신나는', '아주 좋은', '훌륭한', '풍요로운', '자랑스러운', '친절한', '소망하는', 
'행운의', '유망한', '신뢰할 수 있는', '자신감 있는', '긍정적인', '희망찬', '감사하는', '기대되는', '매력적인', 
'활기찬', '창의적인', '도움이 되는', '활발한', '건강한', '순수한', '유익한'
    ];
    const randomIndex = Math.floor(Math.random() * prompts.length);
    setPrompt(prompts[randomIndex]);
  };

  const handleChatSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (userInput.trim()) {
      const response = generateChatResponse(userInput);
      setChatHistory([...chatHistory, `사용자: ${userInput}`, `chat매글: ${response}`]);
      setUserInput('');
    }
  };

  const generateChatResponse = (input: string): string => {
    // 간단한 예시 응답 생성 로직
    // ChatGPT API를 사용할 경우 여기에 API 호출 로직
    const responses = [
      '안녕하세요!',
      '오늘 기분은 어떠신가요?',
      '당신이 말한 주제에 대해 더 깊이 이야기해 볼까요?',
      '훌륭하네요!'
    ];
    const randomIndex = Math.floor(Math.random() * responses.length);
    return responses[randomIndex];
  };

  return (
    <Container>
      {/* 글감 생성 버튼 */}
      <GenerateButton onClick={generatePrompt}>글감 생성하기</GenerateButton>
      {/* 글감 */}
      {prompt && <PromptDisplay>{prompt}</PromptDisplay>}

      {/* 글쓰기 폼 */}
      <Form onSubmit={handleSubmit}>
        <Input 
          type="text" 
          placeholder="제목을 입력하세요" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
        />
        <TextArea 
          placeholder="내용을 입력하세요" 
          value={content} 
          onChange={(e) => setContent(e.target.value)} 
        />
        <Button type="submit">글쓰기</Button>
      </Form>

      {/* 명령 프롬프트 영역 */}
      <ChatContainer>
        <ChatHistory>
          {chatHistory.map((entry, index) => (
            <ChatEntry key={index}>{entry}</ChatEntry>
          ))}
        </ChatHistory>
        <ChatInputForm onSubmit={handleChatSubmit}>
          <ChatInput 
            type="text" 
            placeholder="대화를 입력하세요..." 
            value={userInput} 
            onChange={(e) => setUserInput(e.target.value)} 
          />
          <ChatButton type="submit">전송</ChatButton>
        </ChatInputForm>
      </ChatContainer>
    </Container>
  );
};

// 스타일드 컴포넌트 정의

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f0f0f0;
`;

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
`;

const TextArea = styled.textarea`
  padding: 10px;
  margin-bottom: 10px;
  font-size: 1em;
  height: 200px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 1.2em;
  background-color: #1f9ba1;
  color: white;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #1c8a90;
  }
`;

const GenerateButton = styled(Button)`
  background-color: #1f9ba1;
  margin-bottom: 20px;

  &:hover {
    background-color: #1c8a90;
  }
`;

const PromptDisplay = styled.p`
  font-size: 1.2em;
  margin-bottom: 20px;
  color: #333;
`;

const ChatContainer = styled.div`
  width: 80%;
  max-width: 600px;
  margin-top: 20px;
  border: 1px solid #ccc;
  padding: 10px;
  background-color: #fff;
  border-radius: 5px;
`;

const ChatHistory = styled.div`
  height: 200px;
  overflow-y: auto;
  margin-bottom: 10px;
`;

const ChatEntry = styled.div`
  margin-bottom: 5px;
  font-size: 1em;
`;

const ChatInputForm = styled.form`
  display: flex;
`;

const ChatInput = styled.input`
  flex: 1;
  padding: 10px;
  font-size: 1em;
`;

const ChatButton = styled(Button)`
  margin-left: 10px;
  background-color: #1f9ba1;

  &:hover {
    background-color: #1c8a90;
  }
`;

export default Write;
