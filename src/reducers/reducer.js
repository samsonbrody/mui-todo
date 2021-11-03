import { v4 as uuid } from "uuid";
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [
        ...state,
        {
          id: uuid(),
          task: action.task,
          completed: false,
          isInspecting: false,
          dueDate: action.dueDate || "no due date",
        },
      ];

    case "DELETE":
      const filteredTodos = state.filter((todo) => {
        return todo.id !== action.id;
      });
      return filteredTodos;
    case "DELETE_MULTIPLE":
      return state.filter((t) => !action.ids.includes(t.id));
    case "EDIT_TODO":
      console.log(action.updatedTask);
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, task: action.updatedTask } : todo
      );

    case "TOGGLE_COMPLETED":
      return state.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, completed: !action.completed };
        }
        return todo;
      });
    case "TURN_OFF_INSPECTION":
      return state.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, isInspecting: false };
        }
        return todo;
      });
    case "TURN_ON_INSPECTION":
      return state.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, isInspecting: true };
        }
        return todo;
      });

    default:
      return state;
  }
};

export default reducer;
