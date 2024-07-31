// src/store/reducers.ts
import { combineReducers } from 'redux';
import { ADD_TODO } from './action';

const todo = (state: any, action: any) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        id: action.id,
        text: action.text,
        completed: false,
      };
    default:
      return state;
  }
};

const todos = (state = [], action: any) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        todo(undefined, action),
      ];
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  todos,
});

export default rootReducer;
