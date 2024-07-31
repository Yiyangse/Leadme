// src/store/actions.ts
export const ADD_TODO = 'ADD_TODO';

let nextTodoId = 0;

export const addTodo = (text: string) => ({
  type: ADD_TODO,
  id: nextTodoId++,
  text,
});
