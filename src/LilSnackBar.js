import React, { useState, useContext } from "react";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
// import CloseIcon from "@mui/icons-material/Close";
// import Fade from "@mui/material/Fade";
import { TodosContext } from "./context/todoContext";

export default function LilSnackBar() {
  const { dispatch, anyAreChecked, checkedOffTodos } = useContext(TodosContext);

  const [open, setOpen] = useState(true);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const handleDelete = () => {
    const idsToDelete = checkedOffTodos.map((t) => t.id);
    console.log(idsToDelete);
    dispatch({ type: "DELETE_MULTIPLE", ids: idsToDelete });
  };

  return (
    <div>
      {anyAreChecked ? (
        <Snackbar
          open={open}
          onClose={handleClose}
          message={`Delete all ${checkedOffTodos.length} items?`}
          action={
            <>
              <IconButton onClick={handleDelete}>
                <Button style={{ color: "white" }} variant="standard">
                  DELETE?
                </Button>
              </IconButton>
            </>
          }
        />
      ) : (
        ""
      )}
    </div>
  );
}
