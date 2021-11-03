import React, { useState, useContext } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { TodosContext } from "./context/todoContext";
import Typography from "@mui/material/Typography";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 20,
  p: 6,
};

export default function InspectModal(props) {
  const { dispatch } = useContext(TodosContext);
  const [isOpen, setIsOpen] = useState(true);
  const handleClose = () => {
    setIsOpen(false);
    dispatch({ type: "TURN_OFF_INSPECTION", id: props.id });
  };
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={isOpen}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade out={isOpen} in={isOpen}>
          <Box sx={style}>
            <Typography variant="h5">Task: {props.task}</Typography>
            <Typography variant="h6">
              Complete: {props.completed ? "Yes!" : "No :("}
            </Typography>
            <Typography variant="h6">Due on: {props.dueDate}</Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
