import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'; // `useNavigate` 훅을 사용하여 리다이렉트

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); // 에러 메시지 상태
  const navigate = useNavigate(); // 리다이렉트 훅

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(''); // 이전 에러 초기화

    try {
      const response = await axios.post('http://localhost:5000/users/login', {
        email,
        password
      });
      
      // 로그인 성공 시
      localStorage.setItem('token', response.data.token); // JWT 토큰을 로컬 스토리지에 저장
      navigate('/'); // 메인 페이지로 리다이렉트
    } catch (err: any) {
      // 로그인 실패 시
      if (err.response && err.response.data) {
        setError(err.response.data.msg || '로그인에 실패했습니다.');
      } else {
        setError('서버 오류 발생.');
      }
    }
  };

  return (
    <form onSubmit={handleLogin} className="flex flex-col w-full max-w-lg mx-auto">
      {error && <div className="text-red-500 mb-2">{error}</div>} {/* 에러 메시지 표시 */}
      <input
        type="text"
        placeholder="아이디 또는 이메일을 입력해 주세요"
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
        로그인하기
      </button>
      <div className="flex justify-between mt-4">
        <Link to="/Signup" className="text-teal-500 hover:text-teal-700 transition-colors duration-300">회원가입</Link>
        <Link to="/findPassword" className="text-teal-500 hover:text-teal-700 transition-colors duration-300">비밀번호 찾기</Link>
      </div>
    </form>
  );
};

export default LoginForm;
