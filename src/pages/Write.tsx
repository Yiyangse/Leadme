// src/pages/Write.tsx
import React, { useState } from 'react';
import styled from 'styled-components';

interface Post {
  id: number;
  title: string;
  content: string;
}

// Write 컴포넌트 정의
const Write: React.FC = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [prompt, setPrompt] = useState('');
  const [posts, setPosts] = useState<Post[]>([]);
  const [isEditing, setIsEditing] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isEditing !== null) {
      // 수정 모드일 때
      const updatedPosts = posts.map(post => 
        post.id === isEditing ? { ...post, title, content } : post
      );
      setPosts(updatedPosts);
      setIsEditing(null);
    } else {
      // 새 글 작성 모드일 때
      const newPost: Post = {
        id: Date.now(),
        title,
        content,
      };
      setPosts([...posts, newPost]);
    }
    setTitle('');
    setContent('');
  };

  const handleEdit = (id: number) => {
    const postToEdit = posts.find(post => post.id === id);
    if (postToEdit) {
      setTitle(postToEdit.title);
      setContent(postToEdit.content);
      setIsEditing(id);
    }
  };

  const handleDelete = (id: number) => {
    const updatedPosts = posts.filter(post => post.id !== id);
    setPosts(updatedPosts);
  };

  const generatePrompt = () => {
    const prompts = [
      '용기', '실천', '효도', '공감', '매력', '절제', '생명존중', '자연', '인류애', '우정', '기여', '친절', '사랑', '배움', '보람', '호기심', '일관성', '정직', '배려', '겸손', '여유', '즐거움', '꿈', '휴식', '공정', '균형', '단순', '다양', '명예', '봉사', '성실', '소통', '안정', '건강', '권위', '도전', '변화', '성취', '성장', '부유', '목표', '가족', '긍정', '예술', '유머', '열정', '완벽', '인정', '조화', '지식', '책임', '충성', '평화', '협력', '효과', '지혜', '존경', '자율', '헌신', '탁월', '예의', '자존감', '종교', '창의', '도덕', '관용', '신속', '신뢰'
    ];
    const randomIndex = Math.floor(Math.random() * prompts.length);
    setPrompt(prompts[randomIndex]);
  };

  return (
    <Container>
      <GenerateButton onClick={generatePrompt}>글감 생성하기</GenerateButton>
      {prompt && <PromptDisplay>{prompt}</PromptDisplay>}

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
        <Button type="submit">{isEditing !== null ? '수정하기' : '글쓰기'}</Button>
      </Form>

      <PostsList>
        {posts.map(post => (
          <PostItem key={post.id}>
            <PostTitle>{post.title}</PostTitle>
            <PostContent>{post.content}</PostContent>
            <PostActions>
              <EditButton onClick={() => handleEdit(post.id)}>수정</EditButton>
              <DeleteButton onClick={() => handleDelete(post.id)}>삭제</DeleteButton>
            </PostActions>
          </PostItem>
        ))}
      </PostsList>
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
  padding: 20px;
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

const PostsList = styled.div`
  width: 80%;
  max-width: 600px;
  margin-top: 20px;
`;

const PostItem = styled.div`
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 5px;
`;

const PostTitle = styled.h3`
  margin: 0;
  font-size: 1.4em;
`;

const PostContent = styled.p`
  margin: 10px 0;
`;

const PostActions = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const EditButton = styled(Button)`
  background-color: #1f9ba1;
  margin-right: 10px;

  &:hover {
    background-color: #1c8a90;
  }
`;

const DeleteButton = styled(Button)`
  background-color: #e74c3c;
  &:hover {
    background-color: #c0392b;
  }
`;

export default Write;
