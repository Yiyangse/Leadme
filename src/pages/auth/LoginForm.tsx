import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // 회원가입/비밀번호 찾기 링크를 위해 react-router-dom 패키지 사용

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('이메일:', email);
    console.log('비밀번호:', password);
    // 로그인 처리 로직 추가
  };

  return (
    <form onSubmit={handleLogin} className="flex flex-col w-full max-w-lg mx-auto">
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
        <Link to="/signup" className="text-teal-500 hover:text-teal-700 transition-colors duration-300">회원가입</Link>
        <Link to="/findPassword" className="text-teal-500 hover:text-teal-700 transition-colors duration-300">비밀번호 찾기</Link>
      </div>
    </form>
  );
};

export default LoginForm;
