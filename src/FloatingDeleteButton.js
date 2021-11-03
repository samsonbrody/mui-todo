import React from "react";
import { Box, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import Fab from "@mui/material/Fab";

export default function FloatingDeleteButton({
  deleteMultiple,
  multipleDeleteIds,
}) {
  const handleDelete = () => {
    const idsToDelete = multipleDeleteIds.map((t) => t.id);
    deleteMultiple(idsToDelete);
  };
  return (
    <Box onClick={handleDelete} sx={{ "& > :not(style)": { m: 1 } }}>
      <Fab color="secondary" aria-label="add">
        <DeleteIcon />
      </Fab>
    </Box>
  );
}
