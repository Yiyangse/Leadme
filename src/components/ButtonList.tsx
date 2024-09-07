// src/components/ButtonList.tsx
import React from 'react';


const ButtonList: React.FC<{ toggleTheme: () => void; isLight: boolean }> = ({ toggleTheme, isLight }) => {

  return (
    <div className="flex gap-2">
      <button
        onClick={toggleTheme}
        className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 flex items-center justify-center"
      >
        {isLight ? '🌙 Dark' : '💡 Light'}
      </button>
    </div>
  );
};

const Spinner: React.FC = () => {
  return (
    <div className="w-5 h-5 border-4 border-t-white border-teal-300 rounded-full animate-spin"></div>
  );
};

export default ButtonList;

