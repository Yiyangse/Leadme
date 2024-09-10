// src/style/theme.tsx
// Theme 타입 정의
interface Theme {
  bgColor: string;
  textColor: string;
  borderColor: string;
  toggleColor: string;
}

export const lightTheme: Theme = {
  bgColor: "#F5F5F5",       // 밝은 회색
  textColor: "#424242",      // 어두운 회색
  borderColor: "#E0E0E0",    // 회색 테두리
  toggleColor: "#48CFCB",    // 메인 teal 색상
};

export const darkTheme: Theme = {
  bgColor: "#000000",        // 검정
  textColor: "#F5F5F5",      // 밝은 회색
  borderColor: "#229799",    // 어두운 teal 색상
  toggleColor: "#48CFCB",    // 메인 teal 색상
};

