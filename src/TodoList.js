import React, { useContext } from "react";
import Todo from "./Todo";
import { motion, AnimatePresence } from "framer-motion";
import { Paper, List } from "@mui/material";

import InspectModal from "./InspectModal";
import { TodosContext } from "./context/todoContext";

export default function TodoList(props) {
  const { todos, deleteTodo, editTodo, toggleCompleted } =
    useContext(TodosContext);

  return (
    <Paper
      style={{ borderRadius: "1.5rem", maxHeight: "50vh", overflow: "scroll" }}
    >
      {todos.length ? (
        <List>
          {todos.map((todo, idx) => (
            <AnimatePresence>
              <motion.li
                variants={{
                  hidden: (idx) => ({ opacity: 0, y: -50 * idx }),
                  visible: (idx) => ({
                    opacity: 1,
                    y: 0,
                    transition: { delay: idx * 0.025 },
                  }),
                }}
                exit="hidden"
                animate="visible"
                initial="hidden"
                custom={idx}
              >
                {todo.isInspecting && (
                  <InspectModal
                    turnOffInspection={props.turnOffInspection}
                    completed={todo.completed}
                    task={todo.task}
                    id={todo.id}
                    dueDate={todo.dueDate}
                  />
                )}
                <Todo
                  turnOnInspection={props.turnOnInspection}
                  editTodo={editTodo}
                  toggleCompleted={toggleCompleted}
                  deleteTodo={deleteTodo}
                  key={todo.id}
                  task={todo.task}
                  completed={todo.completed}
                  id={todo.id}
                  isInspecting={todo.isInspecting}
                  dueDate={todo.dueDate}
                />
              </motion.li>
            </AnimatePresence>
          ))}
        </List>
      ) : (
        ""
      )}
    </Paper>
  );
}
