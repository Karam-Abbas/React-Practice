import React, { createContext, useContext } from "react";

export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      title: "Task 1",
      completed: false,
    },
  ],
  addTodo: (todo) => {},
  updateTodo: (id, updatedTitle) => {},
  ToggleComplete: (id) => {},
  deleteTodo: (id) => {},
});

export const TodoProvider = TodoContext.Provider;
export const useTodo = () => {
  return useContext(TodoContext);
};
