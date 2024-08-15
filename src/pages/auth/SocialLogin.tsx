import React from 'react';
import styled from 'styled-components';
import KakaoLogin from 'react-kakao-login';

const SocialLogin = () => {
  const kakaoSuccess = (response: any) => {
    console.log('카카오 로그인 성공:', response);
  };

  const kakaoFailure = (error: any) => {
    console.error('카카오 로그인 실패:', error);
  };

  return (
    <Container>
      <Text>간편 로그인</Text>
      <KakaoLogin
        token="<카카오 앱 REST API 키를 여기에 입력하세요>"
        onSuccess={kakaoSuccess}
        onFail={kakaoFailure}
        onLogout={console.info}
        render={(props: any) => (
          <SocialLoginButton onClick={props.onClick}>
            카카오 로그인
          </SocialLoginButton>
        )}
      />
    </Container>
  );
};

// 스타일드 컴포넌트 정의

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Text = styled.p`
  font-size: 1.2em;
  margin-bottom: 10px;
`;

const SocialLoginButton = styled.div`
  padding: 10px;
  font-size: 1.2em;
  background-color: #f7e600;
  color: #3c1e1e;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  width: 100%;
  text-align: center;
  margin-bottom: 10px;

  &:hover {
    background-color: #f5d800;
  }
`;

export default SocialLogin;
