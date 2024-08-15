// src/store/store.ts
import { configureStore } from '@reduxjs/toolkit';
import loadingReducer from './loadingSlice';

const store = configureStore({
  reducer: {
    loading: loadingReducer,
    // 다른 리듀서를 여기에 추가
  },
});

// RootState 타입을 추론하여 정의
export type RootState = ReturnType<typeof store.getState>;
export default store;
