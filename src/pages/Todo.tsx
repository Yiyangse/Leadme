import React from 'react';
import '../index.css'; // CSS 파일 import

const Todo: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white text-center">
      <h1 className="text-2xl text-teal-500 mb-5">오늘은 어떤 주제로 글을 써볼까요?</h1>
      <h2 className="text-lg text-teal-500 mb-5">오늘의 카드를 선택해보세요.</h2>
      <div className="grid grid-cols-3 gap-5 p-5">
        {Array.from({ length: 12 }).map((_, index) => (
          <div key={index} className="w-36 h-36 perspective">
            <div className="card-inner">
              <div className="card-face card-front">
                <p>메모지 {index + 1}</p>
              </div>
              <div className="card-face card-back">
                <img
                  src={`https://picsum.photos/150/150?random=${index}`}
                  alt="Random"
                  className="w-full h-2/3 object-cover rounded-lg mt-4 mb-3"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todo;
