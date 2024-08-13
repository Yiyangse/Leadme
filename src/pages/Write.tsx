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
      
'용기', '실천', '효도', '공감', '매력', '절제', '생명존중', '자연', '인류애', '우정', '기여', '친절', '사랑', '배움', '보람', '호기심', '일관성', '정직', '배려', '겸손', '여유', '즐거움', '꿈', '휴식', '공정', '균형', '단순', '다양', '명예', '봉사', '성실', '소통', '안정', '건강', '권위', '도전', '변화', '성취', '성장', '부유', '목표', '가족', '긍정', '예술', '유머', '열정', '완벽', '인정', '조화', '지식', '책임', '충성', '평화', '협력', '효과', '지혜', '존경', '자율', '헌신', '탁월', '예의', '자존감', '종교', '창의', '도덕', '관용', '신속', '신뢰'
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
