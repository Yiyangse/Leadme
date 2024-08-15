import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'; // `useNavigate` 훅을 사용하여 리다이렉트

const SignupForm = () => {
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); // 에러 메시지 상태
  const navigate = useNavigate(); // 리다이렉트 훅

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleNicknameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(''); // 이전 에러 초기화

    try {
      const response = await axios.post('http://localhost:5000/users/signup', {
        name,
        nickname,
        email,
        password
      });
      
      // 회원가입 성공 시
      alert('회원가입이 완료되었습니다!');
      navigate('/login'); // 로그인 페이지로 리다이렉트
    } catch (err: any) {
      // 회원가입 실패 시
      if (err.response && err.response.data) {
        setError(err.response.data.msg || '회원가입에 실패했습니다.');
      } else {
        setError('서버 오류 발생.');
      }
    }
  };

  return (
    <form onSubmit={handleSignup} className="flex flex-col w-full max-w-lg mx-auto">
      {error && <div className="text-red-500 mb-2">{error}</div>} {/* 에러 메시지 표시 */}
      <input
        type="text"
        placeholder="이름을 입력해 주세요"
        value={name}
        onChange={handleNameChange}
        className="p-3 mb-2 text-lg border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-300"
      />
      <input
        type="text"
        placeholder="닉네임을 입력해 주세요"
        value={nickname}
        onChange={handleNicknameChange}
        className="p-3 mb-2 text-lg border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-300"
      />
      <input
        type="text"
        placeholder="이메일을 입력해 주세요"
        value={email}
        onChange={handleEmailChange}
        className="p-3 mb-2 text-lg border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-300"
      />
      <input
        type="password"
        placeholder="비밀번호를 입력해 주세요"
        value={password}
        onChange={handlePasswordChange}
        className="p-3 mb-2 text-lg border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-300"
      />
      <button
        type="submit"
        className="p-3 text-lg font-semibold text-white bg-teal-500 rounded-md shadow-md hover:bg-teal-600 focus:outline-none transition-colors duration-300"
      >
        회원가입
      </button>
      <div className="flex justify-between mt-4">
        <Link to="/login" className="text-teal-500 hover:text-teal-700 transition-colors duration-300">로그인</Link>
      </div>
    </form>
  );
};

export default SignupForm;
