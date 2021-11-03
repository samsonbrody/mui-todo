import React, { useContext } from "react";

import {
  Box,
  ListItem,
  ListItemText,
  Checkbox,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { motion, AnimatePresence } from "framer-motion";
import EditIcon from "@mui/icons-material/Edit";
import PreviewIcon from "@mui/icons-material/Preview";
import ListItemSecondaryAction from "@mui/material/ListItemSecondaryAction";
import useToggle from "./hooks/useToggle";
import EditTodo from "./EditTodo";
import { TodosContext } from "./context/todoContext";

export default function Todo(props) {
  const { dispatch } = useContext(TodosContext);
  const handleDelete = () => {
    dispatch({ type: "DELETE", id: props.id, task: props.task });
  };
  const handleCheck = () => {
    dispatch({
      type: "TOGGLE_COMPLETED",
      id: props.id,
      completed: props.completed,
    });
  };
  const [isEditing, toggleIsEditing] = useToggle(false);

  const startInspection = () => {
    dispatch({ type: "TURN_ON_INSPECTION", id: props.id });
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Box>
        <ListItem style={{ height: "75px" }}>
          <AnimatePresence initial={false}>
            {isEditing ? (
              <EditTodo
                editTodo={props.editTodo}
                id={props.id}
                task={props.task}
                toggleIsEditing={toggleIsEditing}
              />
            ) : (
              <motion.div
                exit={{ opacity: 1 }}
                initial={{ opacity: 0, duration: 0.3 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <ListItemText
                  style={{
                    marginLeft: "2rem",
                  }}
                >
                  {props.task}
                </ListItemText>

                <ListItemSecondaryAction>
                  <IconButton onClick={startInspection} aria-label="Delete">
                    <PreviewIcon />
                  </IconButton>
                  <IconButton onClick={handleDelete} aria-label="Delete">
                    <DeleteIcon />
                  </IconButton>
                  <IconButton onClick={toggleIsEditing} aria-label="Edit">
                    <EditIcon />
                  </IconButton>
                  <Checkbox
                    onClick={handleCheck}
                    checked={props.completed}
                    color="success"
                  />
                </ListItemSecondaryAction>
              </motion.div>
            )}
          </AnimatePresence>
        </ListItem>
      </Box>
    </motion.div>
  );
}
