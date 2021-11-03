import React, { useContext } from "react";
import { TextField, Button } from "@mui/material";
import useInputState from "./hooks/useInputState";
import { motion } from "framer-motion";
import ListItemSecondaryAction from "@mui/material/ListItemSecondaryAction";
import { TodosContext } from "./context/todoContext";

export default function EditTodo({ id, toggleIsEditing, task }) {
  const { dispatch } = useContext(TodosContext);
  const [value, setValue] = useInputState(task);
  const handleSubmit = (e) => {
    e.preventDefault();
    toggleIsEditing(false);
    dispatch({ type: "EDIT_TODO", updatedTask: value, id: id });
  };
  return (
    <motion.div
      exit={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <form style={{ marginLeft: "1rem" }}>
        <TextField
          autoFocus
          id="outlined-name"
          value={value}
          onChange={setValue}
        />
        <ListItemSecondaryAction>
          <Button onClick={handleSubmit} type="submit">
            Submit
          </Button>
        </ListItemSecondaryAction>
      </form>
    </motion.div>
  );
}
