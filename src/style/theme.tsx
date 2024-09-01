// src/style/theme.tsx

// Theme 타입 정의
interface Theme {
  bgColor: string;
  textColor: string;
  borderColor: string;
  toggleColor: string;
}

export const lightTheme: Theme = {
  bgColor: "#f9f9f9",
  textColor: "#333333",
  borderColor: "#ede7f7",
  toggleColor: "#cbb5dc",
};

export const darkTheme: Theme = {
  bgColor: "#000000",
  textColor: "#f0eef6",
  borderColor: "#a9b0c0",
  toggleColor: "#e0cde3",
};
