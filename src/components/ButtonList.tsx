// src/components/ButtonList.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { startLoading, stopLoading } from '../store/loadingSlice';
import { RootState } from '../store/store';

const ButtonList: React.FC<{ toggleTheme: () => void; isLight: boolean }> = ({ toggleTheme, isLight }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoading = useSelector((state: RootState) => state.loading.isLoading);

  const handleNavigation = (path: string) => {
    dispatch(startLoading());
    setTimeout(() => {
      navigate(path);
      dispatch(stopLoading());
    }, 1000);
  };

  return (
    <div className="flex gap-2">
      <button
        onClick={() => handleNavigation('/home')}
        className="px-4 py-2 bg-teal-500 text-white rounded-md hover:bg-teal-600 flex items-center justify-center"
      >
        {isLoading ? <Spinner /> : 'Home'}
      </button>
      <button
        onClick={() => handleNavigation('/todo')}
        className="px-4 py-2 bg-teal-500 text-white rounded-md hover:bg-teal-600 flex items-center justify-center"
      >
        {isLoading ? <Spinner /> : 'Todo'}
      </button>
      <button
        onClick={() => handleNavigation('/login')}
        className="px-4 py-2 bg-teal-500 text-white rounded-md hover:bg-teal-600 flex items-center justify-center"
      >
        {isLoading ? <Spinner /> : '로그인'}
      </button>
      <button
        onClick={toggleTheme}
        className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 flex items-center justify-center"
      >
        {isLight ? '🌚 Dark' : '🌝 Light'}
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

