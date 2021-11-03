import React, { useState, useContext } from "react";
import { Paper, TextField, Typography, Grid } from "@mui/material";
import useInputState from "./hooks/useInputState";
import { motion, AnimatePresence } from "framer-motion";
import { TodosContext } from "./context/todoContext";
import DueDate from "./DueDate";
export default function NewTodoForm(props) {
  const [textValue, textValueChange, reset] = useInputState("");
  const { dispatch } = useContext(TodosContext);
  const [dueDate, setDueDate] = useState("");
  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD", task: textValue, newTodoDate: dueDate });
    reset();
  };
  const retrieveDueDate = (dueDate) => {
    setDueDate(dueDate);
  };
  console.log("todo form render");
  return (
    <Paper
      style={{ borderRadius: "1.5rem", padding: "2rem", margin: "1rem 0" }}
    >
      <form autoComplete="off" onSubmit={handleFormSubmit}>
        <Grid spacing={2} container alignItems="center">
          <Grid xs={12} md={6} item>
            <DueDate value={dueDate} retrieveDueDate={retrieveDueDate} />
          </Grid>
          <Grid xs={3} md={6} item>
            <AnimatePresence>
              <motion.div
                exit={{ opacity: 1 }}
                initial={{ opacity: 0, duration: 0.3 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <Typography>Due Date: {dueDate}</Typography>
              </motion.div>
            </AnimatePresence>
          </Grid>
        </Grid>

        <TextField
          margin="normal"
          onChange={textValueChange}
          id="outlined-basic"
          label="new to-do"
          variant="outlined"
          value={textValue}
          fullWidth
        />
      </form>
    </Paper>
  );
}
