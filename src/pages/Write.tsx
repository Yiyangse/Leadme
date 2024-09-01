import React, { useState } from 'react';
import '../index.css'; 
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
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-5">
      <div className="relative mb-5">
        <button
          onClick={generatePrompt}
          className="px-4 py-2 text-lg font-semibold text-white bg-teal-500 rounded-md shadow-md hover:bg-teal-600 transition-colors duration-300"
        >
          글감 생성하기
        </button>
        {prompt && (
          <p className="absolute bottom-full mb-2 text-lg text-gray-800 bg-white p-3 rounded-md shadow-md animate-slide-up">
            {prompt}
          </p>
        )}
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col w-full max-w-lg space-y-4">
        <input
          type="text"
          placeholder="제목을 입력하세요"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="p-3 text-lg border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-300"
        />
        <textarea
          placeholder="내용을 입력하세요"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="p-3 text-lg border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-300 h-48 resize-none"
        />
        <button
          type="submit"
          className="p-3 text-lg font-semibold text-white bg-teal-500 rounded-md shadow-md hover:bg-teal-600 focus:outline-none transition-colors duration-300"
        >
          {isEditing !== null ? '수정하기' : '글쓰기'}
        </button>
      </form>

      <div className="w-full max-w-lg mt-8 space-y-4">
        {posts.map(post => (
          <div key={post.id} className="bg-white border border-gray-300 p-4 rounded-md shadow-sm">
            <h3 className="text-xl font-semibold">{post.title}</h3>
            <p className="mt-2 text-gray-800">{post.content}</p>
            <div className="flex justify-end mt-4 space-x-2">
              <button
                onClick={() => handleEdit(post.id)}
                className="px-4 py-2 text-white bg-teal-500 rounded-md shadow-md hover:bg-teal-600 transition-colors duration-300"
              >
                수정
              </button>
              <button
                onClick={() => handleDelete(post.id)}
                className="px-4 py-2 text-white bg-red-500 rounded-md shadow-md hover:bg-red-600 transition-colors duration-300"
              >
                삭제
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Write;
