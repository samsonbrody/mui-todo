import React, { createContext, useEffect, useReducer, useState } from "react";
import todoReducer from "../reducers/reducer";
import useTodoState from "../hooks/useTodoState";

export const TodosContext = createContext();

export function TodosProvider(props) {
  const initialTodos = JSON.parse(localStorage.getItem("todos") || "[]");
  // const {
  //   todos,
  //   addTodo,
  //   deleteTodo,
  //   deleteMultiple,
  //   editTodo,
  //   toggleCompleted,
  //   isInspecting,
  //   turnOffInspection,
  //   turnOnInspection,
  //   checkedOffTodos,
  //   anyAreChecked,
  // } = useTodoState(initialTodos);
  const [todos, dispatch] = useReducer(todoReducer, initialTodos);
  const [anyAreChecked, setAnyAreChecked] = useState(Boolean);

  useEffect(() => {
    window.localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  useEffect(() => {
    const anyAreChecked = todos.some((t) => t.completed);
    setAnyAreChecked(anyAreChecked);
  }, [todos]);
  const checkedOffTodos = todos.filter((t) => t.completed);
  return (
    <TodosContext.Provider
      value={{
        checkedOffTodos,
        anyAreChecked,
        todos,
        dispatch,
      }}
    >
      {props.children}
    </TodosContext.Provider>
  );
}
