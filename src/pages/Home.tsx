import React from "react";
import "./Home.css"; // 커스텀 CSS 파일을 import하여 애니메이션 효과 적용
import "../index.css";
import Contents from "../components/Contents";

const Home: React.FC = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen bg-teal-500 text-white text-center p-5">
        <h2 className="text-6xl mb-4 animate-fadeIn">
          💭오늘 하루 어떠셨나요?
        </h2>
        <br />
        <br />
        <h2 className="text-3xl animate-fadeIn animate-delay-500">
          단단한 나를 만들어주는
          <br />
          가장 쉬운 방법
        </h2>
        <br />
        <br />
      </div>
      <div>
        <Contents />
      </div>
    </>
  );
};

export default Home;
