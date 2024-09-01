// src/style/GlobalStyles.tsx
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
    ${reset}
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body, html {
        font-size: 16px;
    }
    body {
        background: ${({ theme }: { theme: Theme }) => theme.bgColor};
        color: ${({ theme }: { theme: Theme }) => theme.textColor};
        display: block;
        width: 100%;
        height: 100%;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
    button {
        border: none;
        outline: none;
        color: ${({ theme }: { theme: Theme }) => theme.textColor};
        background-color: ${({ theme }: { theme: Theme }) => theme.toggleColor};
        cursor: pointer;
        padding: 0.5rem 1rem;
        border-radius: 0.25rem;
        font-size: 1rem;
        transition: background-color 0.3s, color 0.3s;
        &:hover {
            background-color: ${({ theme }: { theme: Theme }) => theme.borderColor};
        }
    }
`;

interface Theme {
  bgColor: string;
  textColor: string;
  borderColor: string;
  toggleColor: string;
}
