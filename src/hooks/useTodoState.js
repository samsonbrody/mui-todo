import { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";

export default function useTodoState(initialTodos) {
  const [todos, setTodos] = useState(initialTodos);
  const [anyAreChecked, setAnyAreChecked] = useState(Boolean);

  const addTodo = (newTodoText, dueDate) => {
    console.log(newTodoText, dueDate);
    setTodos([
      ...todos,
      {
        id: uuid(),
        task: newTodoText,
        completed: false,
        isInspecting: false,
        dueDate: dueDate || "no due date",
      },
    ]);
  };
  const deleteTodo = (id) => {
    const filteredTodos = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(filteredTodos);
  };
  const deleteMultiple = (ids) => {
    const filteredTodos = todos.filter((t) => !ids.includes(t.id));
    setTodos(filteredTodos);
  };
  const editTodo = (id, updatedTask) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, task: updatedTask } : todo
    );
    setTodos(updatedTodos);
  };
  const toggleCompleted = (id, completed) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };
  const turnOffInspection = (id) => {
    const inspectModeOff = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isInspecting: false };
      }
      return todo;
    });
    setTodos(inspectModeOff);
  };
  const turnOnInspection = (id, isInspecting) => {
    console.log(id, isInspecting);
    const inspectMode = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isInspecting: true };
      }
      return todo;
    });
    setTodos(inspectMode);
  };
  useEffect(() => {
    const anyAreChecked = todos.some((t) => t.completed);
    setAnyAreChecked(anyAreChecked);
  }, [todos]);
  const checkedOffTodos = todos.filter((t) => t.completed);
  return {
    todos,
    addTodo: addTodo,
    deleteTodo: deleteTodo,
    deleteMultiple: deleteMultiple,
    editTodo: editTodo,
    toggleCompleted: toggleCompleted,
    turnOffInspection: turnOffInspection,
    turnOnInspection: turnOnInspection,
    checkedOffTodos: checkedOffTodos,
    anyAreChecked: anyAreChecked,
  };
}
