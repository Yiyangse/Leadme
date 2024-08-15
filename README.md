# Read me and Lead me <릿미>
<aside>
  1.프로젝트 주제 선정
  - 셀프 탐색부터 보완점 진단, 이에 대한 글쓰기 지원하는 웹 서비스
  <br/>
  2.작업 및 형태
  - 작업 기간 : 24.07.19 - 24.09.30
  - 형태 : 단단한 '나'를 만들기 위한 쉬운 글쓰기 플랫폼
</aside>

# 프로젝트 팀원
<aside>

**[폴더 구조]**

LEADME/
│
├── node_modules/
│
├── public/
│
├── src/
│ ├── components/
│ │ ├── ButtonList.tsx
│ │ ├── Footer.tsx
│ │ └── Header.tsx
│ │
│ ├── pages/
│ │ ├── auth/
│ │ │ ├── Login.tsx
│ │ │ ├── LoginForm.tsx
│ │ │ └── SocialLogin.tsx
│ │ │
│ │ ├── Home.tsx
│ │ ├── Todo.tsx
│ │ └── Write.tsx
│ │
│ ├── store/
│ │
│ ├── App.css
│ ├── App.styles.ts
│ ├── App.test.tsx
│ ├── App.tsx
│ ├── index.css
│ ├── index.tsx
│ ├── logo.svg
│ ├── react-app-env.d.ts
│ ├── reportWebVitals.ts
│ ├── setupTests.ts
│ │
│ ├── .gitignore
│ ├── package-lock.json
│ ├── package.json
│ ├── README.md
│ ├── tailwind.config.js
│ └── tsconfig.json

**[개발팀]**

- 서비스 개발자(풀스택) 김영하
- 서비스 개발자(프론트) 박세양
</aside>

# GIT 규칙 - commit, branch

<aside>
💡 가급적 아래 가이드라인에 따라 개발을 진행해주세요.

</aside>

## Commit 규칙

<aside>
📢 commit 메세지 작성 방식은 개인마다 차이가 있어 굳이 아래 내용을 따르지 않아도 좋습니다. 단, 내용을 알 수 있도록 `이슈type : 세부 설명` 구조를 지켜주세요😊
⭕ `코드수정 : 로그인 코드 수정`, `replace : 로고 교체`, `북마크 조회 EndPoint 변경` 
❌ `aaa`, `엔드포인트 변경`, `기능 완성`

</aside>

- `Feat` : 새로운 기능을 추가할 경우
- `Add` : 새로운 파일을 추가한 경우
- `Update` : 기능, 코드를 수정한 경우
- `Fix` : 버그를 고친 경우
- `Remove` : 파일을 삭제하는 작업만 수행한 경우
- `Rename` : 파일 및 폴더명을 수정하거나 옮긴 경우
- `Chore` : 패키지 매니저를 설정하는 경우(ex. npm i ~ 로 package.json 변경된 경우)
- 이외 지켜줬으면 하는 commit 규칙 있으면 추가해주세요.

## Branch 컨벤션

1. 매주 토요일 `master branch`에 merge 
2. 기능(feature)별로 작성 (예시 : `back/jm_login`)
3. `feature`는 `dev`로부터 분기
4. 완성된 `feature`는 `dev`에 병합
